var numbers = [
    13335361211, 13897516385, 15022457757, 15191936306, 18693949497,
    13933314962, 13138569753, 13125634288, 18168751105, 13240288945,
    13098645914, 15603692153, 13455257780, 15916685067, 14701124042,
    13089741902, 15560351609, 1211131444, 13017332800, 18937330815,
    15699699730, 13895038245, 18653855868, 15324150371, 13202536075,
    15873730173, 18828673819, 17658565118, 13069428953, 13814537603
];
var CMCC = [];//移动
var CUCC = [];//联通
var CTCC = [];//电信
var Others = [];//其他号码

for(var i=0;i<numbers.length;i++){
    if(/1(3[4-9]|47|5[0127-9]|78|8[2-47-8])\d{8}/.test(numbers[i])){
        CMCC.push(numbers[i]);//console.log("移动");
    }else if(/2/.test(numbers[i])){ // 补全代码
        CUCC.push(numbers[i]);//console.log("联通");
    }else if(/3/.test(numbers[i])){ // 补全代码
        CTCC.push(numbers[i]);//console.log("电信");
    }else{
        Others.push(numbers[i]);//console.log("其他");
    }
}
console.log("移动号码：",CMCC);
console.log("联通号码：",CUCC);
console.log("电信号码：",CTCC);
console.log("其他号码：",Others);

var reg1 = /\d(\w)\d/;
var ts1 = "1a2b3c4d5e";

var ret1 = reg1.exec(ts1);

console.log(reg1.lastIndex, "__", ret1);
ret1 = reg1.exec(ts1);
console.log(reg1.lastIndex, "__", ret1);

var reg2 = /\d(\w)\d/g;
var ts2 = "1a2b3c4d5e";

var ret2 = reg2.exec(ts2);
console.log(reg2.lastIndex, "__", ret2);
ret2 = reg2.exec(ts2);//全局模式下lastIndex起作用
console.log(reg2.lastIndex, "__", ret2);

for(var i=0;i<numbers.length;i++){
    if(/1(3[4-9]|47|5[012789]|78|8[23478])\d{8}/.test(numbers[i])){
        CMCC.push(numbers[i]);
    }else if(/1(3[0-2]|45|5[56]|76|8[56])\d{8}/.test(numbers[i])){
        CUCC.push(numbers[i]);
    }else if(/1(33|53|77|8[019])\d{8}/.test(numbers[i])){
        CTCC.push(numbers[i]);
    }else {
        Others.push(numbers[i]);
    }
}
console.log("移动号码：",CMCC);
console.log("联通号码：",CUCC);
console.log("电信号码：",CTCC);
console.log("其他号码：",Others);

CMCC = numbers.toString().match(/1(3[4-9]|47|5[012789]|78|8[23478])\d{8}/g);
CUCC = numbers.toString().match(/1(3[0-2]|45|5[56]|76|8[56])\d{8}/g);
CTCC = numbers.toString().match(/1(33|53|77|8[019])\d{8}/g);
console.log("移动号码：",CMCC);
console.log("联通号码：",CUCC);
console.log("电信号码：",CTCC);

var emails = [
    "Ky-D1zU@sina.cn", "jzX4xq@gmail.cn", "J8XNzf7SQV@sohu.com.cn",
    "TSmA4xX@sohu.com.cn", "yDzwr@msn.cn", "l7bSnfYDz-3OO@sina.cn",
    "uavXW@sina.com", "w65FgY5@gmail.cn", "wY6iRUCr@126.com.cn",
    "Gy0GKnygcG@sina.com.cn", "SoMUWIfO@qq.com", "DGOoczUOLl36Oh@163.cn",
    "QP8ENE@gmail.com.cn", "la4-Qu7xxn@qq.com.cn", "_IKhiFMI-rL@sohu.com"
];

var sohuArray = [];
var sinaArray = [];
var qqArray = [];
var otherArray = [];