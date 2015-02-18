var app = angular.module('Rankings', []);

app.controller('RankingsController', ['$scope', 'updateService', function ($scope, updateService) {
		$scope.results = [];

		$scope.rankingsForm = {
			prestige: true,
			international: false,
			roi: false,
			money: false,
			diversity: false,
			forbes: false,
			party: false,
		};

		$scope.schools = {
			prestige: ['Princeton University','Harvard University','Yale University','Columbia University','Stanford University','University of Chicago','Massachusetts Institute of Technology','Duke University','University of Pennsylvania','California Institute of Technology','Dartmouth College','Johns Hopkins University','Northwestern University','Washington University in St. Louis','Cornell University','Brown University','University of Notre Dame','Vanderbilt University','Rice University','University of California at ​Berkeley','Emory University','Georgetown University','University of California at ​Los Angeles','University of Virginia','Carnegie Mellon University','University of Southern California','Tufts University','Wake Forest University','University of Michigan at ​Ann Arbor','University of North Carolina at Chapel Hill','Boston College','New York University','College of William & Mary','University of Rochester','Brandeis University','Georgia Institute of Technology','University of California at San Diego','Case Western Reserve University','University of California at ​Davis','Lehigh University','University of California at ​Santa Barbara','Boston University','Northeastern University','Rensselaer Polytechnic Institute','University of California at ​Irvine','University of Illinois at ​Urbana-​Champaign','University of Wisconsin at ​Madison','Pennsylvania State University at ​University Park','University of Florida'],
			international: ['Harvard University','Stanford University','Massachusetts Institute of Technology','University of California at Berkeley','University of Cambridge','Princeton University','California Institute of Technology','Columbia University','University of Chicago','University of Oxford','Yale University','University of California at Los Angeles','Cornell University','University of California at San Diego','University of Washington','University of Pennsylvania','Johns Hopkins University','University of California at San Francisco','Swiss Federal Institute of Technology Zurich','University College London','University of Tokyo','Imperial College London','University of Michigan at Ann Arbor','University of Toronto','University of Wisconsin at Madison','Kyoto University','New York University','Northwestern University','University of Illinois at Urbana-Champaign','University of Minnesota, Twin Cities','Duke University','Washington University in St. Louis','Rockefeller University','University of Colorado at Boulder','Pierre and Marie Curie University (Paris 6)','University of North Carolina at Chapel Hill','University of British Columbia','University of Manchester','University of Texas at Austin','University of Copenhagen','University of California at Santa Barbara','University of Paris-Sud (Paris 11)','University of Maryland at College Park','University of Melbourne','University of Edinburgh','University of Texas Southwestern Medical Center at Dallas','Karolinska Institute (Sweden)','University of California at Irvine','Heidelberg University','University of Munich'],
			roi: ['Harvey Mudd College','United States Naval Academy ','California Institute of Technology','Stevens Institute of Technology','Babson College','Princeton University','United States Military Academy','Stanford University','Harvard University','Brown University','Massachusetts Institute of Technology','Colgate University','Yale University','Polytechnic Institute of New York University ','State University of New York Maritime College','Cooper Union for the Advancement of Science and Art','Tufts University','Haverford College','Washington and Lee University','Lehigh University','Williams College','University of California at Berkeley','Rose-Hulman Institute of Technology ','University of Notre Dame','Santa Clara University','Manhattan College','Swarthmore College','University of Pennsylvania','United States Air Force Academy','Virginia Military Institute','Rice University','Georgia Institute of Technology','Worcester Polytechnic Institute ','Cornell University ','Carleton College','College of the Holy Cross','Colorado School of Mines','Rensselaer Polytechnic Institute','Carnegie Mellon University','Amherst College','Georgetown University','Kenyon College','Embry-Riddle Aeronautical University at Prescott (Ariz.)','Dartmouth College','Clarkson University','Duke University','Massachusetts Maritime Academy','Lafayette College','Bucknell University','University of California at San Diego'],
			money: ['Babson College','Webb Institute','Massachusetts Institute of Technology','Princeton University','Stanford University','Harvard University','Harvey Mudd College','Cooper Union for the Advancement of Science and Art','Brigham Young University','California Institute of Technology','University of Pennsylvania','Maine Maritime Academy','University of California at Berkeley','Williams College','Yale University','University of Virginia','Amherst College','Virginia Military Institute','Brown University','Rice University','University of Notre Dame','University of Michigan at Ann Arbor','Columbia University','Texas A&M University','Cornell University','Dartmouth College','Colgate University','Bentley University','University of Florida','Lafayette College','University of California at Los Angeles','Swarthmore College','Lehigh University','Principia College','University of California at Irvine','Duke University','University of Washington at Bothell','Georgetown University','Washington and Lee University','University of North Carolina at Chapel Hill','Manhattan College','Georgia Institute of Technology','Virginia Tech','Bowdoin College','Bucknell University','University of California at San Diego','University of Washington','Middlebury College','Claremont McKenna College','Pomona College'],
			diversity: ['Texas A&M University at College Station','University of California at Los Angeles','Stanford University','University of Washington at Seattle','University of Texas at El Paso','Case Western Reserve University','Harvard University','Georgia Institute of Technology','University of NC at Chapel Hill','University of Michigan at Ann Arbor','Massachusetts Institute of Technology','University of California at Santa Barbara','University of California at Davis','University of Wisconsin at Madison','Ohio State University','University of Notre Dame','University of Texas at Austin','University of Florida','Brigham Young University','Utah State University','Florida International University','Vanderbilt University','University of Illinois at Urbana-Champaign','Princeton University','Arizona State University','Michigan State University','Indiana State University','Duke University','Jackson State University','Tufts University','South Carolina State University','University of Minnesota-Twin Cities','Rice University','Carnegie Mellon University','College of William & Mary','Cornell University','University of Memphis','University of Pennsylvania','Virginia Tech','Washington University in St Louis','Syracuse University','Iowa State University','Purdue University–Main Campus','North Carolina State University','Johns Hopkins University','North Carolina A&T State University','University of Utah'],
			forbes: ['Williams College','Stanford University','Swarthmore College','Princeton University','Massachusetts Institute of Technology','Yale University','Harvard University','Pomona College','United States Military Academy','Amherst College','Haverford College','University of Pennsylvania','Brown University','Bowdoin College','Wesleyan University','Carleton College','University of Notre Dame','Dartmouth College','Northwestern University','Columbia University','California Institute of Technology','Davidson College','Duke University','University of Chicago','Tufts University','Vassar College','United States Naval Academy','Georgetown University','Wellesley College','Middlebury College','Cornell University','Rice University','Washington and Lee University','United States Air Force Academy','Barnard College','Boston College','University of California at Berkeley','Colgate University','Colby College','University of Virginia','College of William & Mary','Kenyon College','Oberlin College','University of California at Los Angeles','University of Michigan at Ann Arbor','Reed College','Whitman College','Lafayette College','Smith College','University of North Carolina at Chapel Hill'],
			party: ['Syracuse University','University of Iowa','University of California at Santa Barbara','West Virginia University','University of Illinois at Urbana-Champaign','Lehigh University','Pennsylvania State University at University Park','University of Wisconsin at Madison','Bucknell University','University of Florida','Miami University','Florida State University','Ohio University','DePauw University','University of Georgia','University of Mississippi','Tulane University','University of Vermont','University of Oregon','University of Delaware']
		};

		$scope.changeState = function (item) {
			if ($scope.rankingsForm[item]) {
				$scope.rankingsForm[item] = false;
			} else {
				$scope.rankingsForm[item] = true;
			}

			$scope.newResult();
		};

		$scope.newResult = function () {
			$scope.results = updateService.updateResult($scope.rankingsForm, $scope.schools);
		};

		$scope.newResult();
}]);


app.service('updateService', function () {
	var holding = {};
	var that = this;

	this.updateResult = function (rankObj, schools) {
			holding = {};
			var holdingArray = [];

			for (var prop in rankObj) {
				if (rankObj[prop] === true) {
					that.evalList(schools[prop]);		
				}
				
			}

			for (var schoolVal in holding) {
				holdingArray.push(holding[schoolVal]);
			}

			holdingArray.sort(function (a, b) {
				return b.score - a.score;
			});

			return holdingArray.splice(0, 15);

	};

	this.evalList = function (list) {
		var currentSchool;

		for (var i = 0; i < list.length; i++) {
			currentSchool = list[i];

			if (holding[currentSchool]) {
				holding[currentSchool].score += that.indexHelper(i);
			} else {
				holding[currentSchool] = {name: currentSchool, score: that.indexHelper(i)};
			}
		}

		return holding;
	};

	this.indexHelper = function (index) {
		return 50 - index;
	};
});
