describe('test 1:', function(){
	describe('Local EventEmitter.', function(){
		var EventEmitter = require('events').EventEmitter;
		var ee = new EventEmitter();
		setTimeout(function() {
			ee.emit('ready');
		}, 1000);
		
		it('async test', function(done){
			ee.on('ready', function() {
				done();
			});
		});
	});
});
