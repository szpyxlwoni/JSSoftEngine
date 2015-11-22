define(function () {
	return function (x00, x01, x02, x03, x10, x11, x12, x13, x20, x21, x22, x23, x30, x31, x32, x33){
		this.M = [[x00, x01, x02, x03], [x10, x11, x12, x13], [x20, x21, x22, x23], [x30, x31, x32, x33]];
	}
})