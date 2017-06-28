'use strict';
angular.module('stockAppApp')
.service('CompanyService', function CompanyService($resource) {
return $resource('companies.json');
});