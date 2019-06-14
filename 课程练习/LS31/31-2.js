var mySymbol = Symbol();
var a = {};
a[mySymbol] = 'Hello!';

var a = {
    [mySymbol]: 'Hello!'
};

var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

var aSymbol = Symbol("abc");
var obj = {
    [aSymbol]: 'Hello!'
};
Object.defineProperty(obj, Symbol("abc"), { value: 'World!' });
console.log(obj);

var mySymbol = Symbol();
var a = {};
a.mySymbol = 'Hello!';
a[mySymbol] // undefined
a['mySymbol'] // "Hello!"

var myS1 = Symbol("xx");
var myS2 = "xx";
var obj = {
    [myS1]:123,
    [myS2]:456
};
console.log(obj[myS1],obj[Symbol("xx")]);
console.log(obj[myS2],obj["xx"]);

let s = Symbol();
let obj = {
    [s]: function (arg) {console.log("xx");}
};
obj[s](123);

let obj = {
    [s](arg) {console.log("xx");}
};