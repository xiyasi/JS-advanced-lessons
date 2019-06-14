var div1 = document.getElementById("div1");
//事件对象：当事件发生时构成一个对象
div1.onclick = function(e){
    console.log(e);
}
//默认情况下事件流冒泡的，从内往外

//e.target 是触发事件的原对象，即最内层元素的dom对象，与为捕获和冒泡无关
//e.currentTarget当前触发事件的dom对象
//e.stopPropagation冒泡捕获过程
//e.preventDefault阻止元素的默认操作
//e.bubbles表明当前事件流是否为冒泡
//e.canceable只读属性，表明是否取消了默认操作
//e.cancelBubble是否阻止冒泡过程，等效与stopPropagation
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");

div1.addEventListener("click",function(){
    e.stopPropagation();
    console.log(e.target);
    console.log(e.currentTarget);
    console.log("div1被点击了");
});

div2.addEventListener("click",function(){
    console.log(e.target);
    console.log(e.currentTarget);
    console.log("div2被点击了");
});

div3.addEventListener("click",function(){
    e.stopPropagation();
    console.log(e.target);
    console.log(e.currentTarget);
    console.log("div3被点击了");
});
//EventListener("事件名"，"回调函数"，"是否为捕获时间流")默认情况下为冒泡事件流