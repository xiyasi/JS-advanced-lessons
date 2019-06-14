try {
    try{
        throw "ErrorMessage11";
    }
    finally {
        console.log("finally 111");
    }
}
catch (e) {
    console.log("outside catch",e);
}
finally {
    console.log("finally 222");
}

console.log("logInfo");
console.warn("warnInfo");
console.error("errorInfo");
console.assert(3>2,"有问题的话会输出这句话11111");
console.assert(2==="2","有问题的话会输出这句话22222");

try {
    try {
        throw "oops";
    }
    finally {
        console.log("finally");
    }
}
catch (ex) {
    console.error("outer", ex);
}

try {
    try {
        throw "oops";
    }
    catch (ex) {
        console.error("inner", ex);
    }
    finally {
        console.log("finally");
    }
}
catch (ex) {
    console.error("outer", ex);
}

try {
    try {
        throw "oops";
    }
    catch (ex) {
        console.error("inner", ex);
        throw ex;
    }
    finally {
        console.log("finally");
    }
}
catch (ex) {
    console.error("outer", ex);
}

try{
	function abc(x,cb){
		console.log(x);
		cb();
    }
	abc("xx",function(){
		var arr = new Array(-1);
	});
}
catch(e){
	console.log(e);
}

try{
	function abc(x,cb){
		console.log(x);
		cb();
    }
}
catch(e){
	console.log(e);
}
abc("xx",function(){
    var arr = new Array(-1);
});