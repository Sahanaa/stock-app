'use strict';
angular.module('stockAppApp')
.controller('MainCtrl', function ($scope, $location, MyStockService) {
// Populate mystocks for dynamic nav links
$scope.mystocks = MyStockService.query();
// Using the $location.path() function as a $watch expression
$scope.$watch(function () {
return $location.path();
}, function (path) {
if (_.contains(path, 'mystock')) {
$scope.activeView = 'mystock';
} else {
$scope.activeView = 'dashboard';
}
});
});