(function(angular) {
  'use strict';
// declare a module
var myAppModule = angular.module('myApp', [])

// configure the module.
// in this example we will create a greeting filter
	.controller('StoreController', function() {
        alert('aloha');
	});
})(window.angular);