console.log(/oo/.test("moon"));
console.log(/oo\b/.test("moon"));
console.log(/oon\b/.test("moon"));
console.log(/\boo/.test("moon"));

console.log("moon".search(/oo/));//1
console.log("moon".search(/oo\b/));//-1
console.log("moon".search(/oon\b/));//1
console.log("moon".search(/\boo\b/));//-1

console.log(/oo\B/.test("moon"));
console.log(/oon\B/.test("moon"));
console.log(/oo\B/.test("moon"));
console.log(/\Boo\B/.test("moon"));

console.log("moon".match(/oo\B/));//["oo", index: 1, input: "moon"]
console.log("moonoonxoo".match(/oo\B/));//["oo", index: 1, input: "moonoonxoo"]
console.log("moon".match(/oon\B/));//null
console.log("moo".match(/\Boo\B/));//null

"noonday".replace(/\Boo/,"xx");//"nxxnday"
"noonday".search(/\Boo/);//1

console.log(/oo\B/.test("moon"));
console.log(/oon\B/.test("moon"));
console.log(/oo\B/.test("moon"));
console.log(/\Boo\B/.test("moon"));

console.log("moon".match(/oo\B/));//["oo", index: 1, input: "moon"]
console.log("moonoonxoo".match(/oo\B/));//["oo", index: 1, input: "moonoonxoo"]
console.log("moon".match(/oon\B/));//null
console.log("moo".match(/\Boo\B/));//null

"noonday".replace(/\Boo/,"xx");//"nxxnday"
"noonday".search(/\Boo/);//1

"possibly yesterday".replace(/y\B./,"aaa");//"possibly aaasterday"
"possibly yesterday".replace(/y\B/,"aaa");//"possibly aaaesterday"