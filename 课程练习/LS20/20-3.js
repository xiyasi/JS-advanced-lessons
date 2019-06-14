"sdafsa sdfea2s".replace(/a\ds/g,"*");
"sdafsa sdfea2s".replace(/a\Ds/g,"*");
"sdafsa sdfea2s".replace(/a\ws/g,"*");
"sdafsa sdfea2s".replace(/a\Ws/g,"*");

var str = "test22314234244dgfqeqe232qe13ed";
var newStr = str.search(/\dqe/);
console.log(newStr);
str.replace(/\dqe/,11223344);
console.log(str);

//匹配一个非单词边界  /\B../匹配"noonday"中得'oo', 而/y\B./匹配"possibly yesterday"中得’ye‘
console.log("noonday".match(/\B../));
console.log(/\B../.test("noonday"));

console.log("absxsdfe123Ab".replace(/[abd]/,"X"));
console.log("absxsdfe123Ab".replace(/[abd]/g,"X"));
console.log("absxsdfe123Ab".replace(/[abd]/gi,"X"));

console.log("absxsdfe123Ab".replace(/[^abd]/,"X"));
console.log("absxsdfe123Ab".replace(/[^abd]/g,"X"));
console.log("absxsdfe123Ab".replace(/[^abd]/gi,"X"));

console.log("12345667".replace(/[3-9]/gi,"X"));
console.log("absxsdfe123Ab".replace(/[a-f1-9]/gi,"X"));
console.log("absxsdfe123Ab".replace(/[a-f][1-9]/gi,"X"));//如果单独替换，则需要分组，见后续
console.log("absxsdfe1Q2e3Ab".replace(/[a-f][1-9][A-Z]/gi,"X"));

console.log("2017-10-23".replace(/[0-9]/g,"X"));
console.log("2017-10-23".replace(/[0-9-]/g,"X"));

console.log("@abc@123@".replace(/@./g,"Q"));
console.log("@abc@123@".replace(/.@/g,"Q"));

console.log("This is a Boy is".replace(/is/g,0));
console.log("This is a Boy is".replace(/^is/g,0));
console.log("This is a Boy is".replace(/is$/g,0));
console.log("This is a Boy is".replace(/is\b/g,0));
console.log("This is a Boy is".replace(/is\B/g,0));
console.log("This is a Boy is".replace(/\bis/g,0));
console.log("This is a Boy is".replace(/\Bis/g,0));

