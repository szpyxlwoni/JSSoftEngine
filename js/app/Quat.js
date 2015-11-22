define(function() {
	return function (x, y, z, w) {
		this.M = [x, y, z, w];

		this.toString = function () {
			return this.M[0] + "   " + this.M[1] + "   " + this.M[2] + "   " + this.M[3];
		}

		this.zero = function () {
			this.M[0] = 0;
			this.M[1] = 0;
			this.M[2] = 0;
			this.M[3] = 0;
		}
	}
})