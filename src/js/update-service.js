app.service('updateService', function () {
	var that = this;
	var holding = {};

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
		g
		return holding;
	};

	this.indexHelper = function (index) {
		return 50 - index;
	};
});
