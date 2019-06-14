function foo(x=5){
    let x = 1;//报错
    const x = 2;//报错
    var x = 3;//正常
}
foo();

function f(x = 1,y) {
    return [x,y];
}
f();//[1,undefined]
f(2);//[2,undefined]

function f(x,y = 1) {
    return [x,y];
}
f();//[undefined, 1]
f(2);

function test() {
    console.log(arguments);//console.log(test.arguments);
}
test("a","b","c");

function f(...y){
    console.log(y);
}
f("a","b","c");//输出 ["a","b","c"]

function add(...values) {
    let sum = 0;
    for (var val of values) {
      sum += val;
    }
    return sum;
  }
  add(2, 5, 3) // 10

  function abc(...v){
    console.log(v)
}
o1 = {};
abc.call(o1,...[1,2,3]);