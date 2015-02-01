var google = google || {};

google.appengine = google.appengine || {};

google.appengine.epoch = google.appengine.epoch || {};

google.appengine.epoch.init = function(apiRoot) {
  var apisToLoad;
  var callback = function() {
  }

  gapi.client.load('epoch', 'v1', callback, apiRoot);
};
