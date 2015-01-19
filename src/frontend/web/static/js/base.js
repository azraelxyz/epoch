var google = google || {};

google.appengine = google.appengine || {};

google.appengine.epoch = google.appengine.epoch || {};

google.appengine.epoch.getEpoch = function(epoch) {
    gapi.client.epoch.getEpoch({'epoch': epoch}).execute(
        function(resp) {
            if (!resp.code) {
                console.log(resp);
            }
        });
};

google.appengine.epoch.register = function() {
  var getEpoch = document.querySelector('#epoch');
  getEpoch.addEventListener('keyup', function(e) {
    google.appengine.epoch.getEpoch(document.querySelector('#epoch').value);
  });
};

google.appengine.epoch.init = function(apiRoot) {
  var apisToLoad;
  var callback = function() {
    if (--apisToLoad == 0) {
      google.appengine.epoch.register();
    }
  }

  apisToLoad = 1; // must match number of calls to gapi.client.load()
  gapi.client.load('epoch', 'v1', callback, apiRoot);
};
