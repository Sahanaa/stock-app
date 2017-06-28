'use strict';
angular.module('stockAppApp')
.directive('stkStockTable', function () {
return {
templateUrl: 'views/templates/stock-table.html',
restrict: 'E',
//  Isolate scope
scope: {
mystock: '='
},
// Create a controller, which serves as an API for this directive
controller: function ($scope) {
var rows = [];
$scope.$watch('showPercent', function (showPercent) {
if (showPercent) {
_.each(rows, function (row) {
row.showPercent = showPercent;
});
}
});
this.addRow = function (row) {
rows.push(row);
};
this.removeRow = function (row) {
_.remove(rows, row);
};
},
//  Standard link function implementation
link: function ($scope) {
$scope.showPercent = false;
$scope.removeStock = function (stock) {
$scope.mystock.removeStock(stock);
};
}
};
});