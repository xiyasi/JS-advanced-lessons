"12345678".replace(/\d{3,6}/,'X');//默认为贪婪模式  X78

"12345678".replace(/\d{3,6}?/,'X');//设置为非贪婪模式 在量词后加？X45678

"12345678".replace(/\d{3,6}?/g,'X');

console.log("NameNameName_11111".replace(/Name{3}/,"X"));
console.log("NameNameName_11111".replace(/(Name){3}/,"X"));

console.log("a1b2c3d4e5".replace(/[a-z]\d{3}/,"X"));
console.log("a1b2c3d4e5".replace(/([a-z]\d){3}/,"X"));
console.log("a1b2c3d4e5".replace(/([a-z]\d){3,4}/,"X"));
console.log("a1b2c3d4e5".replace(/([a-z]\d){3,4}?/,"X"));

"abcdefghijk".replace(/abcde|fghijk/g,"X");
"abcdefghijk_abcdehijk_abcfghijk".replace(/abc(de|fg)hijk/g,"X");

"2017-10-23".replace(/(\d{4})-(\d{2})-(\d{2})/,"$2/$3/$1");


console.log("a23*4vv".replace(/\w(?=\d)/g,"X"));
console.log("a23*4v8".replace(/\w(?=\d)/g,"X"));
console.log("a23*4v8".replace(/\w(?!\d)/g,"X"));


console.log(reg2.lastIndex);
reg2.test("abc23def");
console.log(reg2.lastIndex);
reg2.test("abc23def");
console.log(reg2.lastIndex);

while (reg2.test("abc23def")){
    console.log(reg2.lastIndex);
}

var reg3 = /\w/gi;
var str = "slfls3r3sfsf";
var returnArray1 = reg3.exec(str);
console.log(reg3.lastIndex,returnArray1);

var returnArray2 = reg3.exec(str);
console.log(reg3.lastIndex,returnArray2);

console.log(RegExp.$_);
console.log(RegExp.lastMatch);