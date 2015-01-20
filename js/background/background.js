chrome.storage.sync.get({
  GC_status: '',
  GC_refresh: '',
  GM_status: '',
  GM_refresh: '',
  FB_status: '',
  FB_refresh: '',
  CP_status: '',
  CP_refresh: '',
  SB_status: '',
  SB_refresh: '',
  SAB_status: '',
  SABQ_refresh: '',
  SABH_refresh: '',
  DN_status: '',
  DN_refresh: ''
}, function(items) {
  if (items.GC_status == true) {
    chrome.alarms.create('googleCalendar', {periodInMinutes: parseFloat(items.GC_refresh)});
  }
  if (items.GM_status == true) {
    chrome.alarms.create('gmail', {periodInMinutes: parseFloat(items.GM_refresh)});
  }
  if (items.FB_status == true) {
    chrome.alarms.create('facebook', {periodInMinutes: parseFloat(items.FB_refresh)});
  }
  if (items.CP_status == true) {
    chrome.alarms.create('couchPotatoWanted', {periodInMinutes: parseFloat(items.CP_refresh)});
    chrome.alarms.create('couchPotatoSnatched', {periodInMinutes: parseFloat(items.CP_refresh)});
  }
  if (items.SB_status == true) {
    chrome.alarms.create('sickBeard', {periodInMinutes: parseFloat(items.SB_refresh)});
  }
  if (items.SAB_status == true) {
    chrome.alarms.create('sabnzbdQueue', {periodInMinutes: parseFloat(items.SABQ_refresh)});
    chrome.alarms.create('sabnzbdHistory', {periodInMinutes: parseFloat(items.SABH_refresh)});
  }
  if (items.DN_status == true) {
    chrome.alarms.create('designerNews', {periodInMinutes: parseFloat(items.DN_refresh)});
  }

  chrome.runtime.onStartup.addListener(function() {
    console.log('Startup Functions');
    if (items.GC_status == true) {
      getCalendarData();
    }
    if (items.GM_status == true) {
      getGmailData();
    }
    if (items.FB_status == true) {
      getFacebookData();
    }
    if (items.CP_status == true) {
      getWantedCouchPotato();
      getSnatchedCouchPotato();
    }
    if (items.SB_status == true) {
      getSickBeardData();
    }
    if (items.SAB_status == true) {
      getSabnzbdHistory();
      getSabnzbdQueue();
    }
    if (items.DN_status == true) {
      getDesignerNewsData();
    }
  });

  chrome.alarms.onAlarm.addListener(function(alarm) {
    var alarmFunctions = {
      'googleCalendar': getCalendarData,
      'gmail': getGmailData,
      'facebook': getFacebookData,
      'couchPotatoWanted': getWantedCouchPotato,
      'couchPotatoSnatched': getSnatchedCouchPotato,
      'sickBeard': getSickBeardData,
      'sabnzbdQueue': getSabnzbdQueue,
      'sabnzbdHistory': getSabnzbdHistory,
      'designerNews': getDesignerNewsData
    };

    console.log(alarm.name);
    alarmFunctions[alarm.name]();
  });
});