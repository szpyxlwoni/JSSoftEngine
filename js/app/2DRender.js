define(function(require){
	var Point = require('app/Point');
	var Line = require('app/Line');

	var p1 = new Point(0, 0);
	var p2 = new Point(100, 100);

	var line = new Line(p1, p2);
	line.drawLine(0, 0, 0, 1);
})