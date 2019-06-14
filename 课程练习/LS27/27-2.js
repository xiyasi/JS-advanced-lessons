//使用var可能存在变量共享问题
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000*i);
}
//console.log("i：",i);


//使用let可有效避免变量共享问题
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000*i);
}

const PI = 3.1415926;
console.log(PI);

if(true){
    const MAX = 5;
}

const fee = function () {

};

const a = [];
a.push(123,234);//可以
a.length = 1;//可以
a = "str";

console.log(a);
var a = 1;
console.log(a);

//预解析 上述代码等效于
var a;
console.log(a);
a = 1;
console.log(a);

var temp = new Date();
function f() {
    console.log(temp);
    if(false){
        var temp = "Hi!";
    }
}
f();

//let和const不存在变量提升
console.log(a);//报错
let a = 2;
console.log(a);