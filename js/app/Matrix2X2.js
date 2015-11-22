define(function () {
	return function (x00, x01, x10, x11){
		this.M = [[x00, x01], [x10, x11]];

		this.zero = function () {
			for (var row = 0; row < 2; row++) {
				for (var col = 0; col < 2; col++) {
					this.M[row][col] = 0;
				}
			}
		}
	}
})