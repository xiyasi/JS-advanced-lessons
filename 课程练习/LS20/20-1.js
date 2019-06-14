console.log("moon2xyz".replace(/o/,"ab"));
console.log("moon2xyz".replace(/o/g,"ab"));
console.log("moon2 ooxyz".replace(/\bo/g,"ab"));
console.log("moon2xyz".replace(/\dx/,"_"));
console.log("moon2xyz".replace(/[xyz]/g,"ab"));
console.log("m2on2x2z".replace(/\d[zo]/g,"ab"));
console.log("m2on2x2z".replace(/2[x-z]/g,""));

var reg1 = /[bcf]at/gi;

var reg2 = new RegExp(/[bcf]at/,"gi");
var reg3 = new RegExp("[bcf]at","gi");

console.log("a fAt bat ,a faT cat".match(reg1));
console.log("a fAt bat ,a faT cat".match(reg2));
console.log("a fAt bat ,a faT cat".match(reg3));

var regExp = /ab/i;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);

var regExp = /ab/gi;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);

var regExp = /a*b/gi; 
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);

var regExp = /a/i;
console.log(regExp.test("ab"));
console.log(regExp.test("ab"));
console.log(regExp.test("ab"));
console.log(regExp.test("ab"));