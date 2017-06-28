'use strict';

/**
 * @ngdoc function
 * @name stockAppApp.controller:MystockCtrl
 * @description
 * # MystockCtrl
 * Controller of the stockAppApp
 */
angular.module('stockAppApp')
  .controller('MystockCtrl', function ($scope, $routeParams, $modal, MyStockService, CompanyService) {
    // Initializations
$scope.companies = CompanyService.query();
$scope.mystock = MyStockService.query($routeParams.listId);
$scope.stocks = $scope.mystock.stocks;
$scope.newStock = {};
var addStockModal = $modal({
scope: $scope,
template: 'views/templates/addstock-modal.html',
show: false
});
// Expose showStockModal to view via $scope
$scope.showStockModal = function () {
addStockModal.$promise.then(addStockModal.show);
};
// Call the MyStockModel addStock() function and hide the modal
$scope.addStock = function () {
$scope.mystock.addStock({
listId: $routeParams.listId,
company: $scope.newStock.company,
shares: $scope.newStock.shares
});
addStockModal.hide();
$scope.newStock = {};
};
});
