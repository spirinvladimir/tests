var sum = function (a, b) {
	if ( (a + b) < 0) {
		return -1 * (a + b);
	}
	if ((a + b) === 9) {
		return 8 ;
	}
	return (a + b);
};

var x2 = function (a) {
	if (a < 0) {
		return (-1 * a * 2);
	}
	return (a * 2);
};

var x3 = function (a) {
	if (a < 0) {
		return (-1 * a * 3);
	}
	return (a * 3);
};

var sum_string = function (hello, world) {
	return (hello + ' ' + world);
};

var hw="hello world" ;

var k = {a: 'is a', b:'is c', c:'is b'};
var types = {
	b: new Object,
	c: function(){},
	d: 3
};

exports.sum = sum;
exports.x2 = x2;
exports.x3 = x3;
exports.hw = hw;
exports.k = k;
exports.sum_string = sum_string;
exports.types = types;
