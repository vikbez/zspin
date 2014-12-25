'use strict';

var app = angular.module('app', [
  'ngRoute',
  'templates',
]);


// Wraps a promise around a function call that
// expects a function(error, result) callback.
function wrapCallback(d, self, func, args) {
  args = [self].concat([].slice.call(args, 0));
  func = func.bind.apply(func, args);
  func(function resolver(err) {
    if (err) {
      d.reject(err);
    } else {
      d.resolve([].slice.call(arguments, 1));
    }
  });
}

app.config( ['$sceDelegateProvider', function($sceDelegateProvider){   
  $sceDelegateProvider.resourceUrlWhitelist(['self', new RegExp('^.*$')]);
}]);

app.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider.when('/', {
      controller: 'MenuCtrl',
      templateUrl: 'Menu.html',
    }).otherwise({ 
      redirectTo: '/',
    });
  }
]);

