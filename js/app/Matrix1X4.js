define(function() {
	return function (x00, x01, x02, x03) {
		this.M = [x00, x01, x02, x03];

		this.toString = function () {
			return this.M[0] + "   " + this.M[1] + "   " + this.M[2] + "   " + this.M[3];
		}
	}
})