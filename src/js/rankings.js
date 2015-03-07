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
			prestige: ['Princeton','Harvard','Yale','Columbia','Stanford','University of Chicago','MIT','Duke','University of Pennsylvania','Caltech','Dartmouth','Johns Hopkins','Northwestern','Washington University','Cornell','Brown','Notre Dame','Vanderbilt','Rice','UC - ​Berkeley','Emory','Georgetown','UCLA','University of Virginia','Carnegie Mellon','USC','Tufts','Wake Forest','Michigan','UNC at Chapel Hill','Boston College','New York University','College of William & Mary','University of Rochester','Brandeis','Georgia Tech','UC - San Diego','Case Western Reserve','UC - ​Davis','Lehigh University','UC - ​Santa Barbara','Boston University','Northeastern','Rensselaer Polytechnic Institute','UC - ​Irvine','University of Illinois','University of Wisconsin','Penn State','University of Florida'],
			international: ['Harvard','Stanford','MIT','UC - Berkeley','University of Cambridge','Princeton','Caltech','Columbia','University of Chicago','University of Oxford','Yale','UCLA','Cornell','UC - San Diego','University of Washington','University of Pennsylvania','Johns Hopkins','UC - San Francisco','Swiss Federal Institute of Technology Zurich','University College London','University of Tokyo','Imperial College London','Michigan','University of Toronto','University of Wisconsin','Kyoto University','New York University','Northwestern','University of Illinois','University of Minnesota, Twin Cities','Duke','Washington University','Rockefeller University','University of Colorado','Pierre and Marie Curie University (Paris 6)','UNC at Chapel Hill','University of British Columbia','University of Manchester','UT - Austin','University of Copenhagen','UC - Santa Barbara','University of Paris-Sud (Paris 11)','University of Maryland','University of Melbourne','University of Edinburgh','University of Texas Southwestern Medical Center at Dallas','Karolinska Institute (Sweden)','UC - Irvine','Heidelberg University','University of Munich'],
			roi: ['Harvey Mudd College','United States Naval Academy','Caltech','Stevens Institute of Technology','Babson College','Princeton','West Point','Stanford','Harvard','Brown','MIT','Colgate University','Yale','Polytechnic Institute of New York University ','SUNY Maritime College','Cooper Union','Tufts','Haverford College','Washington and Lee University','Lehigh University','Williams College','UC - Berkeley','Rose-Hulman Institute of Technology ','Notre Dame','Santa Clara University','Manhattan College','Swarthmore College','University of Pennsylvania','Air Force Academy','Virginia Military Institute','Rice','Georgia Tech','Worcester Polytechnic Institute ','Cornell ','Carleton College','College of the Holy Cross','Colorado School of Mines','Rensselaer Polytechnic Institute','Carnegie Mellon','Amherst College','Georgetown','Kenyon College','Embry-Riddle Aeronautical University','Dartmouth','Clarkson University','Duke','Massachusetts Maritime Academy','Lafayette College','Bucknell University','UC - San Diego'],
			money: ['Babson College','Webb Institute','MIT','Princeton','Stanford','Harvard','Harvey Mudd College','Cooper Union','Brigham Young','Caltech','University of Pennsylvania','Maine Maritime Academy','UC - Berkeley','Williams College','Yale','University of Virginia','Amherst College','Virginia Military Institute','Brown','Rice','Notre Dame','Michigan','Columbia','Texas A&M','Cornell','Dartmouth','Colgate University','Bentley University','University of Florida','Lafayette College','UCLA','Swarthmore College','Lehigh University','Principia College','UC - Irvine','Duke','University of Washington at Bothell','Georgetown','Washington and Lee University','UNC at Chapel Hill','Manhattan College','Georgia Tech','Virginia Tech','Bowdoin College','Bucknell University','UC - San Diego','University of Washington','Middlebury College','Claremont McKenna College','Pomona College'],
			diversity: ['Texas A&M','UCLA','Stanford','University of Washington','UT - El Paso','Case Western Reserve','Harvard','Georgia Tech','University of NC at Chapel Hill','Michigan','MIT','UC - Santa Barbara','UC - Davis','University of Wisconsin','Ohio State University','Notre Dame','UT - Austin','University of Florida','Brigham Young','Utah State University','Florida International University','Vanderbilt','University of Illinois','Princeton','Arizona State University','Michigan State University','Indiana State University','Duke','Jackson State University','Tufts','South Carolina State University','University of Minnesota','Rice','Carnegie Mellon','College of William & Mary','Cornell','University of Memphis','University of Pennsylvania','Virginia Tech','Washington University in St Louis','Syracuse','Iowa State University','Purdue University–Main Campus','North Carolina State University','Johns Hopkins','North Carolina A&T State University','University of Utah'],
			forbes: ['Williams College','Stanford','Swarthmore College','Princeton','MIT','Yale','Harvard','Pomona College','West Point','Amherst College','Haverford College','University of Pennsylvania','Brown','Bowdoin College','Wesleyan University','Carleton College','Notre Dame','Dartmouth','Northwestern','Columbia','Caltech','Davidson College','Duke','University of Chicago','Tufts','Vassar College','United States Naval Academy','Georgetown','Wellesley College','Middlebury College','Cornell','Rice','Washington and Lee University','Air Force Academy','Barnard College','Boston College','UC - Berkeley','Colgate University','Colby College','University of Virginia','College of William & Mary','Kenyon College','Oberlin College','UCLA','Michigan','Reed College','Whitman College','Lafayette College','Smith College','UNC at Chapel Hill'],
			party: ['Syracuse','University of Iowa','UC - Santa Barbara','West Virginia','University of Illinois','Lehigh University','Penn State','University of Wisconsin','Bucknell University','University of Florida','Miami University','Florida State','Ohio University','DePauw University','University of Georgia','University of Mississippi','Tulane University','University of Vermont','University of Oregon','University of Delaware']
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

