window.onload = function () {
    window.Foo = function () {
        var inputValue = document.getElementById("inputID").value;
        try{
            var n = parseInt(inputValue);
            var a= new Array(n);
            for(var i=0;i<n;i++){a[i] = i;}
        }
        catch(e){
            alert(e.name+e.message);
            console.log("n:",n);
            a = [];
        }
        finally {
            document.getElementById("labelID").innerHTML = a+"_"+(a instanceof Array)
        }
    };
};

var e1 = new Error("e1 Error Msg");
try {
    throw  e1;//throw new Error("Whoops!");
} catch (e) {
    console.log(e.name + ": " + e.message);
}

console.log(Error.prototype);//{name: "Error", message: "", constructor: function, toString: function}
var myError = new Error("NewMessage");
console.log(myError.name,myError.message);

function MyError(name,message) {
    this.name = name||'MyError';
    this.message = message || 'Default Message';
}
MyError.prototype.__proto__ = Error.prototype;

try {
    // throw new MyError();
    throw new MyError('custom message');
} catch (e) {
    console.log(e.name);     // 'MyError'
    console.log(e.message);  // 'custom message'
}