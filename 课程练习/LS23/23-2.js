var o2 = {
    a:[1,2],
    b:true,
    c:[3,4,"x",{y:34,z:56}],
};

var jsonStr2 = JSON.stringify(o2,function (key,value) {
    if(value === true){
        value = false;
    }
    if((value instanceof Array)&&value.length == 4){
        value[0] = "Hi";
    }
    if(key === "a"){
        console.log("find key a");
        value = 12345;
    }
    if(key === "z"){
        console.log("find key z");
        value = "zzz";
    }
    return value;
});
console.log(jsonStr2);
console.log(o2);

function replacer(key, value) {
    if (typeof value === "string") {
        return undefined;
    }
    return value;
}
var foo = { foundation: "Mozilla", model: "box", week: 45, transport: "car", month: 7 };
var jsonString1 = JSON.stringify(foo, replacer);
console.log(jsonString1);


var jsonString2 = JSON.stringify(foo, ['model', 'transport']);  
console.log(jsonString2);

function replacer(key, value) {
    if (typeof (value) === "string") {
        return value;
    }
    else { return undefined };
}
var foo = {
    name: "json",
    age: 13,
    a: "lkd"
}
var json5 = JSON.stringify(foo, replacer);
console.log(json5);

var o8 = JSON.parse('{"1": 1, "2": 2,"3": {"4": 4, "5": {"6": 6}}}',
    function (k, v) {
        console.log(k); 
        return v;       
    });
console.log(o8);

var o6 = JSON.parse('{"p": 5}', function (k, v) {
    console.log("回调调用");
    if(k === '') return v;     
    return v * 2;              
});                            
console.log(o6);

var o7 = JSON.parse('{"p": 5,"x":1}', function (k, v) {
    if(k === 'p') return 2*v;     
    if(k === 'x') return 3*v;
    if(k === '')  return v;          
});                             
console.log(o7);