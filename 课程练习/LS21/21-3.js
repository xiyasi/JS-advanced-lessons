try
{
    var x = y;
}catch(e){
    console.log(e.name,e.message);
}
finally {
    console.log("finally");
}

try{
    var a= new Array(-1);
}catch(e){
    console.log(e.name,e.message);
}
finally {
    console.log("finally");
}

try{
    var a;a.aa();
}catch(e){
    console.log(e.name,e.message);
}
finally {
    console.log("finally");
}

function UserError(message,name){
    this.message = message || '默认信息';
    this.name = name || 'UserError';
}
UserError.prototype.__proto__ = Error.prototype;

try {
    throw new RangeError();
} catch (e) {
    if (e instanceof TypeError) {
        console.log("TypeError");
    } else if (e instanceof RangeError) {
        console.log("RangeError");
    } else if (e instanceof ReferenceError) {
        console.log("ReferenceError");
    } else {
        console.log("OtherError");
    }
}

//
try {
    throw n; // 抛出一个数值异常
} catch (e) {
    if (e <= 50) {
        // 异常在 1-50 之间时，直接处理
    } else {
        // 异常无法处理，重新抛出，可再外层再次被捕获
        throw e;
    }
}

function UserException(message) {
    this.message = message;
    this.name = "UserException";
}
UserException.prototype.__proto__ = Error.prototype;
function getMonthName(mo) {
    mo = mo-1;
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct", "Nov", "Dec"];
    if (months[mo] !== undefined) {
        return months[mo];
    } else {
        throw new UserException("InvalidMonthNo");
    }
}
try {
    var myMonth = 15; 
    var monthName = getMonthName(myMonth);
} catch (e) {
    var monthName = "unknown";
    console.log(e.message, e.name); 
}
