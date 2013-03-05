var app = process.env.COVERAGE ? require('../../lib-cov/app.js') : require('../../lib/app.js'),
	sum = app.sum;
	x2 = app.x2,
	x3 = app.x3,
	hw = app.hw,
	k = app.k,
	sum_string = app.sum_string,
	t = app.types,
	assert = require("assert");

describe('test 1:', function(){
  describe('Check sum().', function(){
    it('2 + 3 = 5', function(){
      assert.equal(5, sum(2, 3));
    });
  });
});

describe('test 2:', function(){
  describe('Check x2().', function(){
    it('2 * 2 = 4', function(){
      assert.equal(4, x2(2, 2));
    });
  });
});

describe('test 3:', function(){
  describe('Module x2() > 0.', function(){
    it('-2 * 2 = 4', function(){
      assert.equal(4, x2(-2, 2));
    });
  });
});

describe('test 4:', function(){
  describe('Module sum() > 0.', function(){
    it('2 - 3 = 1', function(){
      assert.equal(1, sum(2, -3));
    });
  });
});

describe('test 5:', function(){
  describe('I hate number 9.', function(){
    it('Don\'t return 9', function(){
      var i;
      for(i = 0; i < 20000000; i++) {
          assert.notEqual(9, sum(i, 9 - i));
      }
    });
  });
});

describe('test 6:', function(){
  describe('Check x3().', function(){
    it('* 3', function(){
      var i;
      for(i = 0; i < 20000000; i++) {
          assert.equal(i * 3, x3(i));
      }
    });
  });
});

describe('test 7:', function(){
  describe('Check x3().', function(){
    it('It will have property hw and hw - \'hello world\':', function() {
		assert.equal('hello world', hw);
    });
  });
});

describe('test 8:', function(){
  describe('Check keys.', function(){
    it('It will have k with keys: a, b, c', function() {
		assert.equal('is a', k.a);
		assert.equal('is b', k.c);
		assert.equal('is c', k.b);
    });
  });
});

describe('test 9:', function(){
  describe('Check sum strings.', function(){
    it('It will sum 2 strings.', function() {
		assert.equal('hello world', sum_string('hello', 'world'));
    });
  });
});

describe('test 10:', function(){
  describe('JavaScript has types: "number", "object", "function".', function(){
    it('...', function() {
		assert.equal('object', typeof t.b);
		assert.equal('function', typeof t.c);
		assert.equal('number', typeof t.d);
    });
  });
});
