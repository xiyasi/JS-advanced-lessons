window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        console.log(e.clientX,e.clientY);
    }
    div1.addEventListener("click",eventHandler);
    // div1.addEventListener("click",eventHandler,false);//第3个参数可选
    div1.addEventListener("click",function(){
        console.log("xx");
    });
}

window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    div1.addEventListener("click",function (e) {
        console.log("div1 click");
        e.stopPropagation();
    },false);//第3个参数可以不写，默认为false

    div2.addEventListener("click",function (e) {
        console.log("div2 click");
    },false);

    document.addEventListener("click",function (e) {
        console.log("document click");
    },false);

    document.body.addEventListener("click",function (e) {
        console.log("body click");
    },true);
}