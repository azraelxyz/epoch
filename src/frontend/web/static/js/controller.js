(function(angular) {
  'use strict';
angular.module('EpochConvert', ['EpochService'])
    .controller('EpochController', ['epoch_backend', function(epoch_backend) {
        // machine readble time
        var parent = this;
        this.mrt = 1262304000;
        this.hrt = '';

        this.mrt2hrt = function mrt2hrt(sec) {
            epoch_backend.mrt2hrt(sec).then(function(promise) {
                parent.hrt = promise;
            });
        }
    }]);
})(window.angular);
