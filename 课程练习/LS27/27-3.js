typeof b;//报错 ReferenceError 需要使用前定义
let b;//若没有此行，上一行是否会报错

var tmp = 123;
if(true){
    tmp = "abc";
    let tmp;//思考如果改为var是否会报错，如果let tmp在上一行之前如何？
}


//let const不能重复声明
let abc;
let abc;//报错

function foo1() {
    let x;
    var x;
}
foo1();//报错 重复定义

function foo2() {
    let x;
    let x;
}
foo2();//报错 重复定义