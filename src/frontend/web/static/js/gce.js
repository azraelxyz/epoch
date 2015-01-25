var google = google || {};

google.appengine = google.appengine || {};

google.appengine.epoch = google.appengine.epoch || {};

google.appengine.epoch.getEpoch = function(sec, scope, cbk) {
    gapi.client.epoch.getEpoch({'sec': sec}).execute(
        function(resp) {
            if (!resp.code) {
                cbk(scope, resp.message);
                scope.$apply();
            }
        }
    );
};

google.appengine.epoch.init = function(apiRoot) {
  var apisToLoad;
  var callback = function() {
  }

  gapi.client.load('epoch', 'v1', callback, apiRoot);
};
