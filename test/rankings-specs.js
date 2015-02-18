describe('RankingsController', function () {
	beforeEach(module('Rankings'));

	var ctrl, scope;
	 // inject the $controller and $rootScope services
	 // in the beforeEach block
	beforeEach(inject(function($controller, $rootScope) {
	    // Create a new scope that's a child of the $rootScope
	    scope = $rootScope.$new();
	    // Create the controller
	    ctrl = $controller('RankingsController', {
	      $scope: scope
	    });
	 }));

	it('should contain a results property, an array with 15 cells.', function () {
		expect(scope.results.length).toEqual(15);
	});

});

describe('updateService', function () {
	var updateService, returnedIndex, evaledList, updatedResult, ctrl, scope;

	beforeEach(module('Rankings'));

	beforeEach(inject(function ($controller, $rootScope, _updateService_) {

		//controller scope
		scope = $rootScope.$new();
	    // Create the controller
	    ctrl = $controller('RankingsController', {
	      $scope: scope
	    });

		//service injection
    	updateService = _updateService_;
    	updatedResult = updateService.updateResult(scope.rankingsForm, scope.schools);
  	}));


  	it('should contain a functioning indexHelper function', function () {
  		returnedIndex = updateService.indexHelper(0);
  		expect(returnedIndex).toEqual(50);
  	});

  	describe('its evalList function', function () {

  		beforeEach(function(){
  			evaledList = updateService.evalList(scope.schools.prestige);
  		});

  		it('should create a property for each school', function () {
  			expect(evaledList['Princeton University']).toBeTruthy();
  			expect(evaledList['Harvard University']).toBeTruthy();
  		});
  	});

  	describe('its updateResult function', function () {
  		
  		it('should return an array with a length of 15', function () { //aggregate result list is trimmed by function
  			expect(updatedResult.length).toBe(15);
  		});

  	});

});