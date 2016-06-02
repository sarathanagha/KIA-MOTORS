'use strict';

describe('Controller: HomeController', function () {

  // load the controller's module
  beforeEach(module('kiacpoApp'));

  var HomeController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeController = $controller('HomeController', {
      $scope: scope
    });
  }));

  it('should have a title equal to "HOME TEST"', function () {
    expect(scope.title).toEqual('HOME TEST');
  });
});
