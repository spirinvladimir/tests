describe('EventEmitter', function(){
	describe('Local EventEmitter.', function(){
		var EventEmitter = require('events').EventEmitter;
		var ee = new EventEmitter();
		var x;
		
		it('Async ready.', function(done){
			this.timeout(1001);
			ee.on('ready', function() {
				x = 0;
				done();
			});
			setTimeout(function() {
				ee.emit('ready');
			}, 100);
		});
		
		it('Inc: x += 2', function(done){
			this.timeout(1001);
			ee.on('inc', function(i) {
				x += i;
				done();
			});
			setTimeout(function() {
				ee.emit('inc', 2);
			}, 300);
		});
		
		it('Dec: x -= 1', function(done){
			this.timeout(1001);
			ee.on('dec', function(i) {
				x -= i;
				done();
			});
			setTimeout(function() {
				ee.emit('dec', 1);
			}, 400);
		
		});
		
		it('Check x === 1', function(done){
			ee.on('check', function() {
				x.should.equal(1);
				done();
			});
			setTimeout(function() {
				ee.emit('check');
			}, 500);
		});
	});
});
