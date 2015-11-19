define(function (require) {
	var ctx = require('app/canvas')

	return function(p1, p2) {
		this.p1 = p1;
		this.p2 = p2;

		this.draw = function (rgba) {
			var dy = this.p2.y - this.p1.y;
			var dx = this.p2.x - this.p1.x;
			var x_inc = 1;
			var y_inc = 1;
			var line_x = this.p1.x;
			var line_y = this.p1.y;
			ctx.fillStyle = rgba;

			if (dy < 0) {
				y_inc = -1;
				dy = -dy;
			}
			if (dx < 0) {
				x_inc = -1;
				dx = -dx;
			}

			if (dx > dy) {
				var error_test = dy * 2 - dx;
				for (var i = 0; i < dx; i++) {
				    ctx.fillRect(line_x, line_y, 1, 1);

				    if (error_test >= 0) {
				    	error_test -= dx * 2;
				    	line_y += y_inc;
				    }

				    error_test += dy * 2;
				    line_x += x_inc;
				}
			} else {
				var error_test = dx * 2 - dy;
				for (var i = 0; i < dy; i++) {
				    ctx.fillRect(line_x, line_y, 1, 1);

				    if (error_test >= 0) {
				    	error_test -= dy * 2;
				    	line_x += x_inc;
				    }

				    error_test += dx * 2;
				    line_y += y_inc;
				}
			}
		}
	}
})