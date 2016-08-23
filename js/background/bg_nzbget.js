// Docs:
// https://github.com/nzbget/nzbget/wiki/API

function getNzbgetQueue(callback) {
  var url = serviceData.NG.apiUrl;
  var apiCall = "/listgroups";

  ajax('GET', url + apiCall).then(function(queueJson) {
    localStorage.setItem("NzbgetQueue", JSON.stringify(queueJson));
    serviceData.NG.queue.JSON = queueJson;
    localStorage.setItem("Nzbget_error", false);
    serviceData.NG.queue.error = false;
    ngqHTML();

    if (callback) {
      callback();
    }
  }, function() {
    localStorage.setItem("Nzbget_error", true);
    serviceData.NG.queue.error = true;

    if (callback) {
      callback();
    }
  })
}

function getNzbgetHistory(itemLength, callback) {
  var url = serviceData.NG.apiUrl;
  var apiCall = "/history";

  ajax('GET', url + apiCall).then(function(historyJson) {
    localStorage.setItem("NzbgetHistory", JSON.stringify(historyJson));
    serviceData.NG.JSON = historyJson;
    localStorage.setItem("Nzbget_error", false);
    serviceData.NG.error = false;
    nghHTML(itemLength);

    if (callback) {
      callback();
    }
  }, function() {
    localStorage.setItem("Nzbget_error", true);
    serviceData.NG.error = true;

    if (callback) {
      callback();
    }
  })
}

function ngqHTML() {
  if (serviceData.NG.queue.JSON) {
    var status = '',
        queueJson = serviceData.NG.queue.JSON,
        queueHTML = '<h2>Queue</h2>',
        downloadPercentage;

    queueJson.result.forEach(function(el, index) {
      downloadPercentage = el.DownloadedSizeMB/(el.FileSizeMB/100);

      queueHTML +=
        '<div class="core-item ng-item-container without-hover">' +
          '<div class="ng-item-name">' +
            htmlEncode(el.NZBName) +
          '</div>' +
          '<div class="ng-item-status">' +
            htmlEncode(el.Status + ' - ' + Math.round(downloadPercentage) + '%') +
          '</div>' +
        '</div>';
    });

    if (queueJson.result.length < 1) {
      queueHTML += '<div class="core-item without-hover">No items in queue at this moment.</div>';
    }

    localStorage.setItem('NzbgetQueueHTML', queueHTML);
    serviceData.NG.queue.HTML = queueHTML;
  }
}

function nghHTML(itemLength) {
  if (serviceData.NG.history.JSON) {
    var status = '',
        historyJson = serviceData.NG.history.JSON,
        historyHTML = '<h2>History</h2>';

    historyJson.result.slice(0, itemLength).forEach(function(el, index) {
      historyHTML +=
        '<div class="core-item ng-item-container">' +
          '<div class="ng-item-name">' +
            htmlEncode(el.Name) +
          '</div>' +
          '<div class="core-item-icon"></div>' +
        '</div>' +
        '<div class="ng-collapse core-collapse">' +
          '<div class="ng-collapse-status">' +
            htmlEncode(el.Status) +
          '</div>' +
        '</div>';
    });

    if (historyJson.result.length < 1) {
      historyHTML += '<div class="core-item without-hover">No items in history at this moment.</div>';
    }

    localStorage.setItem('NzbgetHistoryHTML', historyHTML);
    serviceData.NG.history.HTML = historyHTML;
  }
}
