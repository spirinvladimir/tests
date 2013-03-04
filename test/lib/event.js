describe('test 1:', function(){
	describe('Local EventEmitter.', function(){
		var EventEmitter = require('events').EventEmitter;
		var ee = new EventEmitter();
		setTimeout(function() {
			ee.emit('ready');
		}, 1000);
		
		it('async test', function(done){
			this.timeout(1001);
			ee.on('ready', function() {
				done();
			});
		});
	});
});
