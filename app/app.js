var app = angular.module('Brewmeister', ['ngMaterial']);
app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey');
});

// alert('hello');