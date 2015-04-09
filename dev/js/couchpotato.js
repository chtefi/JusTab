// Docs:
// http://nas.pxdesign.nl:5050/docs

// "media.list" lists all movies, "movie.status" returns the status of the movie
$(window).load(function() {
  $.when(serviceDataRefreshDone).done(function() {
    if (serviceData.CPS.status) {
      window[serviceData.CPS.feFunctionName]();

      $('.refresh_cp').click(function() {
        $('#couchpotato .error:visible').slideUp(400);

        $('.refresh_cp').fadeOut(400, function() {
          $(this).html(serviceData.spinner);
          $(this).fadeIn(400, function() {
            chrome.runtime.getBackgroundPage(function(backgroundPage) {
              backgroundPage.getWantedCouchPotato(25, function() {
                backgroundPage.getSnatchedCouchPotato(function() {
                  $('.refresh_cp').fadeOut(400, function() {
                    $(this).html('<img src="img/icons/refresh.svg" alt="Refresh Couchpotato" draggable=false>');
                    $(this).fadeIn(400);
                  });
                });
              });
            });
          });
        });
      });

      $('#couchpotato .panel_content').bind('scroll', couchpotatoCheckScroll);

      $('#couchpotato .panel_header .panel_header_foreground .bottom a').attr('href', serviceData.CPW.url);

      $('#couchpotato, .couchpotato_info').show();
      $('body').width($('body').width() + $('#couchpotato').width());
      $('.bottom_bar_container').width($('.panel_container').width());
    }
  });
});

$('html').on('click', '.cp_search_movie', function(event) {
  searchMovie($(this));
});

function cpShowData() {
  $('.wanted').empty();
  $('.snatched').empty();

  var wantedError = serviceData.CPW.error;
  var snatchedError = serviceData.CPS.error;

  if (wantedError == "true" || snatchedError == "true") {
    $('#couchpotato .error').slideDown('slow');
  } else {
    $('#couchpotato .error').slideUp('slow');
  }

  if (serviceData.CPW.HTML && serviceData.CPS.HTML) {
    $('.snatched').html(serviceData.CPS.HTML);
    $('.wanted').html(serviceData.CPW.HTML);

    $('.cp_poster').unveil();

    if ($('.snatched .core_item').length === 0) {
      $('.snatched').html('<h2>Snatched</h2><div class="core_item without_hover">No snatched movies at this moment.</div>');
    }
    if ($('.wanted .core_item').length === 0) {
      $('.wanted').html('<h2>Wanted</h2><div class="core_item without_hover">No wanted movies at this moment.</div>');
    }
  }
}

function searchMovie(clickedObject) {
  var movieId = clickedObject.attr('id');

  var url = serviceData.CPS.apiUrl;
  var searchApiUrl = url + "/movie.refresh/?id=" + movieId;

  $.ajax({
    url: searchApiUrl
  })
  .done(function(data) {
    if (data.success) {
      clickedObject.attr('class', 'done_icon cp_search_movie waves-effect');
    } else {
      clickedObject.attr('class', 'error_icon cp_search_movie waves-effect');
    }
  })
  .fail(function() {
    clickedObject.attr('class', 'error_icon cp_search_movie waves-effect');
  });
}

function couchpotatoCheckScroll(e) {
  var elem = $(e.currentTarget);
  var length = $('#couchpotato .wanted .cp_item').length;
  if (elem[0].scrollHeight - elem[0].scrollTop == elem.outerHeight() && length < serviceData.CPW.JSON.total) {
    if ($('#couchpotato .wanted .loading_bar').length === 0) {
      $('#couchpotato .wanted').append('<div class="core_item loading_bar">' + serviceData.spinner + '</div>');
    }
    chrome.runtime.getBackgroundPage(function(backgroundPage) {
      backgroundPage.getWantedCouchPotato(length + 25);
    });
  }
}