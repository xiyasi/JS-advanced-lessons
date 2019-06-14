for(var i=0;i<5;i++) {
        document.getElementById("btnId" + i).addEventListener("click", function () {
            document.bgColor = "#"+i*2+i*2+i*2+i*2+"00";
            console.log("#"+i*2+i*2+i*2+i*2+"00");
        });
}

var http = require('http');
var url = 'http://www.baidu.com';

http.get(url,function(res){
    res.setEncoding('utf-8');
    res.on('data',function(data){
        console.log(data);
    });
    res.on('end',function(end){
        console.log('End!');
    });
});

var Subject = function(){
    var _observer = [];
    this.attach = function(observer){
        _observer.push(observer);
    };
    this.detach = function(){
        _observer.pop();
    };
    this.notify = function(msg){
        for(var i=0;i<_observer.length;i++){
            _observer[i].update(msg);
        }
    };
    this.print = function(){
        console.log(_observer.length);
        console.log(_observer);
    };
};
var Observer = function(name){
    this.update = function(msg){
        console.log('i am '+name+',and i get the message: '+msg);
    };
};
var sub = new Subject()
sub.attach(new Observer('a'));
sub.attach(new Observer('b'));
sub.notify('hello');
//sub.print();

setTimeout(function(){
    var c = new Observer('c');
    sub.detach();
    sub.attach(c);
    sub.notify('world');
    //sub.print();
},5000);