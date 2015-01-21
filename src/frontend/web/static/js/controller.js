(function(angular) {
  'use strict';
angular.module('EpochConvert', ['EpochService'])
    .controller('EpochController', ['$scope', 'epoch_backend', function($scope, epoch_backend) {
        // machine readble time
        this.mrt = 1262304000;

        this.mrt2hrt = function mrt2hrt(sec) {
            epoch_backend.mrt2hrt(sec, $scope);
        }
    }]);
})(window.angular);
