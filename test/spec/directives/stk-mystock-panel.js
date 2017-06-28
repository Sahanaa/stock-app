'use strict';

describe('Directive: stkMyStockPanel', function () {

  // load the directive's module
  beforeEach(module('stockAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<stk-my-stock-panel></stk-my-stock-panel>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the stkMyStockPanel directive');
  }));
});
