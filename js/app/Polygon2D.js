define(['underscore','app/Line'], function (_, Line) {
	return function (state, num_verts, x0, y0, xv, yv, color, vlist) {
		this.state = state;
		this.num_verts = num_verts;
		this.x0 = x0;
		this.y0 = y0;
		this.xv = xv;
		this.yv = yv;
		this.color = color;
		this.vlist = vlist;

		this.draw = function () {
			if (state) {
				var worldPoints = _.reduce(vlist, function (list, v){
					var point = {};
					point.x = v.x + x0;
					point.y = v.y + y0;
					list.push(point);
					return list;
				}, []);
				for (var i = 0; i < num_verts - 1; i++) {
					var line = new Line(worldPoints[i], worldPoints[i + 1]);
					line.draw();
				}

				var lastLine = new Line(worldPoints[i], worldPoints[0]);
				lastLine.draw()
			}
		}

		this.translate = function (dx, dy) {
			x0 += dx;
			y0 += dy;
		}

		this.rotation = function (ang) {
			var theta = ang * 3.14159 / 180;
			_.map(vlist, function (v) {
				var xr = v.x * Math.cos(theta) - v.y * Math.sin(theta);
				var yr = v.x * Math.sin(theta) + v.y * Math.cos(theta);
				v.x = xr;
				v.y = yr;
			});
		}

		this.scale = function (sx, sy) {
			_.map(vlist, function (v) {
				v.x = v.x * sx;
				v.y = v.y * sy;
			});
		}
	}
})