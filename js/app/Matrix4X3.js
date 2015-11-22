define(function () {
	return function (x00, x01, x02, x10, x11, x12, x20, x21, x22, x30, x31, x32){
		this.M = [[x00, x01, x02], [x10, x11, x12], [x20, x21, x22], [x30, x31, x32]];
	}
})