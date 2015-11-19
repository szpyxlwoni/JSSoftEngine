define(function() {
	return function (x00, x01, x02) {
		this.M = [x00, x01, x02];

		this.multi3X3 = function (other) {
			var result = [];
			for (var col = 0; col < 3; col++) {
				var sum = 0;
				for (var i = 0; i < 3; i++) {
					sum += this.M[i] * other.M[i][col];
				}
				result[col] = sum;
			}
			return result;
		}

		this.translate = function (dx, dy) {
			var other = {};
			other.M = [[1, 0, 0], [0, 1, 0], [dx, dy, 1]];

			this.M = this.multi3X3(other);
		}

		this.scale = function (sx, sy) {
			var other = {};
			other.M = [[sx, 0, 0], [0, sy, 0], [0, 0, 1]];

			this.M = this.multi3X3(other);
		}

		this.rotation = function (ang) {
			var theta = ang * 3.14159 / 180;
			var other = {};
			other.M = [[Math.cos(theta), Math.sin(theta), 0], [-Math.sin(theta), Math.cos(theta), 0], [0, 0, 1]];

			this.M = this.multi3X3(other);
		}

		this.toString = function () {
			return this.M[0] + "   " + this.M[1] + "   " + this.M[2];
		}
	}
})