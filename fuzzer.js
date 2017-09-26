var python = require('node-python');
var os = python.import('os')
os.system("i will put files in when this gets used");

var helperFunctions = {
	randomIntFromRandom: function(min, max){
		return Math.floor(Math.random()*(max-min+1)+min);
	}
}


var flipByte = {
	flipByte: function(var inBytes) {
		var i = helperFunctions.randomIntFromInterval(0,inBytes.length);
     		var c = String.fromCharCode(helperFunctions.randomIntFromInterval(0, 0xFF));
		return inBytes[:i] + c + inBytes[i+1];
	}
}

var initializeStuff = {
	compare : function(fn1, fn2){
		with open(fn1) as f1, open(fn2) as f2 {
			return f1.read() == f2.read();
		}
}
var check_radare(){
	checkIt: function(){
		os.system("echo -e \"aaa\ns sys.main\npdf\" | radare2 (fileName) > (otherFileName)")
		//will add the copy and read functions later when this will be used
	}
}
			
