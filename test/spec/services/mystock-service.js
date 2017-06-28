'use strict';

describe('Service: MyStockService', function () {

  // load the service's module
  beforeEach(module('stockAppApp'));

  // instantiate service
  var MyStockService;
  beforeEach(inject(function (_MyStockService_) {
    MyStockService = _MyStockService_;
  }));

  it('should do something', function () {
    expect(!!MyStockService).toBe(true);
  });

});
