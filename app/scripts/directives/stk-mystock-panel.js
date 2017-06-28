'use strict';

/**
 * @ngdoc directive
 * @name stockAppApp.directive:stkMyStockPanel
 * @description
 * # stkMyStockPanel
 */
angular.module('stockAppApp')
  .directive('stkMyStockPanel', function ($location, $modal, $routeParams, MyStockService) {
    return {

      templateUrl: 'views/templates/mystock-panel.html',
		restrict: 'E',
		scope: {},
		link: function ($scope) {
		//  Initialize variables
			$scope.mystock = {};
			$scope.currentList = $routeParams.listId;

			var addListModal = $modal({
			scope: $scope,
			template: 'views/templates/addlist-modal.html',
			show: false
			});
		//  Bind model from service to this scope
			$scope.mystocks = MyStockService.query();
		//  Display addlist modal
			$scope.showModal = function () {
			addListModal.$promise.then(addListModal.show);
			};
		//  Create a new list from fields 
			$scope.createList = function () {
			MyStockService.save($scope.mystock);
			addListModal.hide();
			$scope.mystock = {};
			};
	    //  Delete desired list and redirect to home
			$scope.deleteList = function (list) {
			MyStockService.remove(list);
			$location.path('/');
			};

		// send users to mystocks view	
            $scope.gotoList = function (listId) {
            $location.path('mystock/' + listId);
            };
		}
	};
});