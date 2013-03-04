# TOC
   - [test 1:](#test-1)
     - [Local EventEmitter.](#test-1-local-eventemitter)
     - [Check sum().](#test-1-check-sum)
   - [test 2:](#test-2)
     - [Check x2().](#test-2-check-x2)
   - [test 3:](#test-3)
     - [Module x2() > 0.](#test-3-module-x2--0)
   - [test 4:](#test-4)
     - [Module sum() > 0.](#test-4-module-sum--0)
   - [test 5:](#test-5)
     - [I hate number 9.](#test-5-i-hate-number-9)
   - [test 6:](#test-6)
     - [Check x3().](#test-6-check-x3)
   - [test 7:](#test-7)
     - [Check x3().](#test-7-check-x3)
   - [test 8:](#test-8)
     - [Check keys.](#test-8-check-keys)
   - [test 9:](#test-9)
     - [Check sum strings.](#test-9-check-sum-strings)
   - [test 10:](#test-10)
     - [JavaScript has types: "number", "array", "object", "function".](#test-10-javascript-has-types-number-array-object-function)
<a name=""></a>
 
<a name="test-1"></a>
# test 1:
<a name="test-1-local-eventemitter"></a>
## Local EventEmitter.
async test.

```js
this.timeout(1001);
			ee.on('ready', function() {
				done();
			});
```

<a name="test-1"></a>
# test 1:
<a name="test-1-check-sum"></a>
## Check sum().
2 + 3 = 5.

```js
assert.equal(5, sum(2, 3));
```

<a name="test-2"></a>
# test 2:
<a name="test-2-check-x2"></a>
## Check x2().
2 * 2 = 4.

```js
assert.equal(4, x2(2, 2));
```

<a name="test-3"></a>
# test 3:
<a name="test-3-module-x2--0"></a>
## Module x2() > 0.
-2 * 2 = 4.

```js
assert.equal(4, x2(-2, 2));
```

<a name="test-4"></a>
# test 4:
<a name="test-4-module-sum--0"></a>
## Module sum() > 0.
2 - 3 = 1.

```js
assert.equal(1, sum(2, -3));
```

<a name="test-5"></a>
# test 5:
<a name="test-5-i-hate-number-9"></a>
## I hate number 9.
Don't return 9.

```js
var i;
for(i = 0; i < 20000000; i++) {
    assert.notEqual(9, sum(i, 9 - i));
}
```

<a name="test-6"></a>
# test 6:
<a name="test-6-check-x3"></a>
## Check x3().
* 3.

```js
var i;
for(i = 0; i < 20000000; i++) {
    assert.equal(i * 3, x3(i));
}
```

<a name="test-7"></a>
# test 7:
<a name="test-7-check-x3"></a>
## Check x3().
It will have property hw and hw - 'hello world':.

```js
assert.equal('hello world', require('../index.js').hw);
```

<a name="test-8"></a>
# test 8:
<a name="test-8-check-keys"></a>
## Check keys.
It will have k with keys: a, b, c.

```js
assert.equal('is a', require('../index.js').k.a);
		assert.equal('is b', require('../index.js').k.c);
		assert.equal('is c', require('../index.js').k.b);
```

<a name="test-9"></a>
# test 9:
<a name="test-9-check-sum-strings"></a>
## Check sum strings.
It will sum 2 strings..

```js
assert.equal('hello world', require('../index.js').sum_string('hello', 'world'));
```

<a name="test-10"></a>
# test 10:
<a name="test-10-javascript-has-types-number-array-object-function"></a>
## JavaScript has types: "number", "array", "object", "function".
....

```js
var t = require('../index.js').types;
		assert.equal('object', typeof t.b);
		assert.equal('function', typeof t.c);
		assert.equal('number', typeof t.d);
```

