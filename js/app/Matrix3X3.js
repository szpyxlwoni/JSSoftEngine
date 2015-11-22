define(function () {
	return function (x00, x01, x02, x10, x11, x12, x20, x21, x22){
		this.M = [[x00, x01, x02], [x10, x11, x12], [x20, x21, x22]];

		this.multi3X3 = function (other) {
			var result = [[],[],[]];
			for (var row = 0; row < 3; row++) {
				for (var col = 0; col < 3; col++) {
				    var sum = 0;
				    for (var i = 0; i < 3; i++) {
				    	sum += this.M[row][i] * other.M[i][col];
				    }
				    result[row][col] = sum;
				}
			}
			return result;
		}

		this.transpose = function () {
			var newM = [[]];
			for (var row = 0; row < 3; row++) {
				for (var col = 0; col < 3; col++) {
					newM[col][row] = this.M[row][col];
				}
			}
			return newM;
		}

		this.zero = function () {
			for (var row = 0; row < 3; row++) {
				for (var col = 0; col < 3; col++) {
					this.M[row][col] = 0;
				}
			}
		}
	}
})