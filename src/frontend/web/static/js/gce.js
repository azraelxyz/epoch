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

google.appengine.epoch.register = function() {
  var convertBtn = document.querySelector('#convert');
  convertBtn.addEventListener('click', function(e) {
    google.appengine.epoch.getEpoch(document.querySelector('#epoch').value);
  });
};

google.appengine.epoch.init = function(apiRoot) {
  var apisToLoad;
  var callback = function() {
    if (--apisToLoad == 0) {
      //google.appengine.epoch.register();
    }
  }

  apisToLoad = 1; // must match number of calls to gapi.client.load()
  gapi.client.load('epoch', 'v1', callback, apiRoot);
};
