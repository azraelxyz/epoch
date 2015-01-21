var es = angular.module('EpochService', []);
es.factory('epoch_backend', function() {
    var cbk = function(scope, hrt) {
        scope.hrt = hrt;
    };
    this.mrt2hrt = function(sec, scope) {
        google.appengine.epoch.getEpoch(sec, scope, cbk);
    };
    return {
        mrt2hrt: this.mrt2hrt
    };
});
