function getGmailData(length, callback) {
  chrome.identity.getAuthToken({'interactive': true},function (token) {
    if (!length) {
      length = 25;
    }
    getMailId(token, length, callback);
  });
}

function getMailId(token, length, callback) {
  chrome.identity.getProfileUserInfo(function(data) {
    var email = encodeURIComponent(data.email);
    var query = "&q=" + encodeURIComponent("-in:chats -in:sent -in:notes");
    var url = "https://www.googleapis.com/gmail/v1/users/" + email + "/messages?maxResults=" + length + "&oauth_token=" + token + query;
    var messages = [];

    $.when($.ajax({
      url: url,
      dataType: 'json',
      timeout: 3000,
      success: function(data) {
        $.each(data.messages, function(i, message) {
          getMailContent(token, message.id, messages, email);
        });
        localStorage.setItem("Gmail_page", data.nextPageToken);
        localStorage.setItem("Gmail_error", false);
        serviceData.GM.error = false;
      },
      error: function(xhr, ajaxOptions, thrownError) {
        console.log(xhr, ajaxOptions, thrownError);
        localStorage.setItem("Gmail_error", true);
        serviceData.GM.error = true;

        if (callback) {
          callback();
        }
      }
    })).then(function() {
      localStorage.setItem("Gmail", JSON.stringify(messages));
      serviceData.GM.JSON = messages;

      GmailHTML();

      if (callback) {
        callback();
      }
    });
  });
}

function getMailContent(token, Id, messages, email) {
  var url = "https://www.googleapis.com/gmail/v1/users/" + email + "/messages/" + Id + "?&oauth_token=" + token;

  $.ajax({
    url: url,
    dataType: 'json',
    async: false,
    timeout: 3000,
    success: function(data) {
      messages.push(data);
      localStorage.setItem("Gmail_error", false);
      serviceData.GM.error = false;
    },
    error: function(xhr, ajaxOptions, thrownError) {
      console.log(xhr, ajaxOptions, thrownError);
      localStorage.setItem("Gmail_error", true);
      serviceData.GM.error = true;
    }
  });
}

function GmailHTML() {
  var data = serviceData.GM.JSON;
  var messageSubject, messageFrom, messageDate, messageSnippet;
  var GmailUnreadHTML = '<h2>Unread</h2>';
  var GmailReadHTML = '<h2>Read</h2>';

  $.each(data, function(i, message) {
    $.each(message.payload.headers, function(i, header) {
      if (header.name == "Subject") {
        messageSubject = $('<div />').html(header.value).text();
      }
      if (header.name == "From") {
        messageFrom = header.value.replace(/<(.|\n)*?>/, "");
      }
      if (header.name == "Date") {
        if (moment(header.value).isSame(moment(), 'day')) {
          messageDate = moment(header.value).format("hh:mm A");
        }
        else {
          messageDate = moment(header.value).format("MMM D, hh:mm A");
        }
      }
    });
    messageSnippet = message.snippet;

    var htmlData =
      '<div class="gm_message core_item waves-effect">' +
        '<a href="https://mail.google.com/mail/u/0/#inbox/' + message.id + '">' +
          '<div class="gm_message_subject">' + messageSubject + '</div>' +
          '<div class="gm_message_date">' + messageDate + '</div>' +
          '<div class="gm_message_from">' + messageFrom + '  -  ' + messageSnippet + '</div>' +
        '</a>' +
      '</div>';

    if (message.labelIds) {
      if (message.labelIds.indexOf("UNREAD") != -1) {
        GmailUnreadHTML += htmlData;
      }
      else {
        GmailReadHTML += htmlData;
      }
    }
  });

  localStorage.setItem('GmailUnreadHTML', GmailUnreadHTML);
  serviceData.GM.UnreadHTML = GmailUnreadHTML;
  localStorage.setItem('GmailReadHTML', GmailReadHTML);
  serviceData.GM.ReadHTML = GmailReadHTML;
}