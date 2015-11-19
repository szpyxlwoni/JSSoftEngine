define(function(require){
	var Point = require('app/Point');
	var Line = require('app/Line');
	var Polygon2D = require('app/Polygon2D');
	var Matrix3X3 = require('app/Matrix3X3');
	var Matrix1X3 = require('app/Matrix1X3');
	var Triangle2D = require('app/Triangle2D');

	var p1 = new Point(0, 0);
	var p2 = new Point(100, 100);

	var line = new Line(p1, p2);
	line.draw("rgba(0, 0, 0, 1)");

	var vlist = [new Point(33,-3), new Point(9,-18), new Point(-12,-9), new Point(-21,-12), new Point(-9,6), new Point(-15,15), new Point(-3,27), new Point(21,21)];
	var polygon = new Polygon2D(true, vlist.length, 100, 100, 0, 0, "rgba(0, 0, 0, 1)", vlist);
	polygon.draw();
	polygon.translate(100, 100);
	polygon.draw();
	polygon.rotation(90);
	polygon.draw();
	polygon.scale(2, 2);
	polygon.draw();
	var R = new Matrix3X3(-3, 3, -3, 0, -3, 3, 0, 0, -3);
	var Q = new Matrix3X3(-1 / 3, -2 / 3, -2 / 3, -2 / 3, -1 / 3, 2 / 3, -2 / 3, 2 / 3, -1 / 3);
	Q.multi3X3(R);
	var P = new Matrix1X3(1, 1, 1);
	P.multi3X3(R);
	P.translate(100, 100);
	console.log(P.toString());
	P.scale(2, 2);
	console.log(P.toString());
	P.rotation(90);
	console.log(P.toString());
	var p0 = new Point(50, 0);
	var p1 = new Point(0, 100);
	var p2 = new Point(100, 100);
	var triFB = new Triangle2D(p0, p1, p2);
	triFB.draw("rgba(0, 0, 0, 1)");
	var p3 = new Point(100, 0);
	var p4 = new Point(200, 0);
	var p5 = new Point(150, 100);
	var triFT = new Triangle2D(p3, p4, p5);
	triFT.draw("rgba(0, 0, 0, 1)");
	var p6 = new Point(300, 0);
	var p7 = new Point(250, 50);
	var p8 = new Point(350, 100);
	var tri = new Triangle2D(p6, p7, p8);
	tri.draw("rgba(0, 0, 0, 1)");
})