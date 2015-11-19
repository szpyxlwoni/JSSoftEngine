define(['app/Line', 'app/Point', 'underscore'], function (Line, Point, _) {
	return function (v0, v1, v2) {
		this.v0 = v0;
		this.v1 = v1;
		this.v2 = v2;

		this.drawFlatBottom = function (vTop, vBottom1, vBottom2, rgba) {
			var dxy_left = (vBottom1.x - vTop.x) / (vBottom1.y - vTop.y);
			var dxy_right = (vBottom2.x - vTop.x) / (vBottom2.y - vTop.y);

			var xs = vTop.x;
			var xe = vTop.x;

			for (var y = vTop.y; y < vBottom1.y; y++) {
				var p0 = new Point(xs, y);
				var p1 = new Point(xe, y);
				var line = new Line(p0, p1);
				line.draw(rgba);
				xs += dxy_left;
				xe += dxy_right;
			}
		}

		this.drawFlatTop = function (vTop1, vTop2, vBottom, rgba) {
			var dxy_left = (vBottom.x - vTop1.x) / (vBottom.y - vTop1.y);
			var dxy_right = (vBottom.x - vTop2.x) / (vBottom.y - vTop2.y);

			var xs = vTop1.x;
			var xe = vTop2.x;

			for (var y = vTop1.y; y < vBottom.y; y++) {
				var p0 = new Point(xs, y);
				var p1 = new Point(xe, y);
				var line = new Line(p0, p1);
				line.draw(rgba);
				xs += dxy_left;
				xe += dxy_right;
			}
		}

		this.draw = function (rgba) {
			var orderedVertexList = _.sortBy([v0, v1, v2], function (v) {return v.y;});
			var max_v = orderedVertexList[0];
			var mid_v = orderedVertexList[1];
			var min_v = orderedVertexList[2];
			if (min_v.y == mid_v.y) {
				this.drawFlatBottom(max_v, mid_v, min_v, rgba);
			} else if (orderedVertexList[0].y == orderedVertexList[1].y) {
				this.drawFlatTop(max_v, mid_v, min_v, rgba);
			} else {
				new_x = min_v.x + (mid_v.y - min_v.y) * (max_v.x - min_v.x)/ (max_v.y - min_v.y);
				var new_mid_v = new Point(new_x, mid_v.y);
				this.drawFlatBottom(max_v, new_mid_v, mid_v);
				this.drawFlatTop(new_mid_v, mid_v, min_v);
			}
		}
	}
})