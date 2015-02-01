var es = angular.module('EpochService', []);
es.factory('epoch_backend', function($q) {
    this.mrt2hrt = function(sec) {
        return $q(function(resolve, reject) {
            gapi.client.epoch.getEpoch({'sec': sec}).execute(
                function(resp) {
                    if (!resp.code) {
                        resolve(resp.message);
                    }
                }
            );
		});
    };
    return {
        mrt2hrt: this.mrt2hrt
    };
});
