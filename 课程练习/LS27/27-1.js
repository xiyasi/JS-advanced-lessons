{
    var a = 23;
}
console.log(a);//由于没有块作用域，a可以正常输出

//例2
for(var i=0;i<5;i++){
    //do somethings
}
console.log("i:",i);//此处i依然存在


//例3 通过var声明的变量，由于没有块作用域，容易造成变量污染
var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};

//一长串代码后，假如忘记上边定义了userID，容易重复定义造成变量污染
var a=2,b=3;
if(a<b){
    var userId = 234;
}

for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000*i);
}
console.log("i：",i);

//通过IIFE解决变量共享问题
for (var i = 0; i < 3; i++) {
    (function(j) {  // j = i
        setTimeout(function() {
            console.log(new Date, j);
        }, 1000*i);
    })(i);
}

let userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};

let a=2,b=3;
if(a<b){
    let userId = 234;
}

//let 定义的变量 并不像 var 那样直接作为全局对象的属性
var x = 23;
let y = 34;
console.log(window.x,window.y);