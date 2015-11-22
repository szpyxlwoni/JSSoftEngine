define(function () {
	return function (x00, x01, x02, x03, x10, x11, x12, x13, x20, x21, x22, x23, x30, x31, x32, x33){
		this.M = [[x00, x01, x02, x03], [x10, x11, x12, x13], [x20, x21, x22, x23], [x30, x31, x32, x33]];

		this.transpose = function () {
			var newM = [[]];
			for (var row = 0; row < 4; row++) {
				for (var col = 0; col < 4; col++) {
					newM[col][row] = this.M[row][col];
				}
			}
			return newM;
		}

		this.zero = function () {
			for (var row = 0; row < 4; row++) {
				for (var col = 0; col < 4; col++) {
					this.M[row][col] = 0;
				}
			}
		}
	}
})