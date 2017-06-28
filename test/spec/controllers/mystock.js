'use strict';

describe('Controller: MystockCtrl', function () {

  // load the controller's module
  beforeEach(module('stockAppApp'));

  var MystockCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MystockCtrl = $controller('MystockCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MystockCtrl.awesomeThings.length).toBe(3);
  });
});
