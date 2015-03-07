app.service('updateService', function () {
	var that = this,
		holding = {};
	
	this.updateResult = function (rankObj, schools) {
			holding = {};
			var holdingArray = [];

			for (var prop in rankObj) {
				if (rankObj[prop]) {
					this.evalList(schools[prop]);		
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
				holding[currentSchool].score += (50 - i);
			} else {
				holding[currentSchool] = {name: currentSchool, score: (50 - i)};
			}
		}
	};
});
