class Foo {
    static prop = 1;
}

class Foo {
    // ...
}
Foo.prop = 1;

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y); // 调用父类的constructor(x, y)，如果没有调用super将报错
        this.color = color;
    }
    show() {
        console.log(this.x,this.y,this.color);
    }
}
var cp = new ColorPoint(1,2,3);
cp.show();

console.log(cp instanceof ColorPoint); // true
console.log(cp instanceof Point); // true

//类-类原型链、对象-对象原型链
console.log(Object.getPrototypeOf(ColorPoint) === Point);//true
console.log(ColorPoint.__proto__ === Point);//true
console.log(cp.__proto__ === ColorPoint.prototype);//true
console.log(cp.__proto__.__proto__ === Point.prototype);//true
console.log(ColorPoint.__proto__.__proto__ === Function.__proto__);//true

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        //this.color = color; // ReferenceError 报错因为没有调用父类构造函数，没有实例
        super(x, y);
        this.color = color; // 正确
    }
}


// 关于静态方法的继承，父类的静态方法，可以被子类继承。
class Foo {
    static classMethod() {
        return 'hello';
    }
}
class Bar extends Foo {
}
Bar.classMethod(); // 'hello'
// 上面代码中，父类Foo有一个静态方法，子类Bar可以调用这个方法。

// 静态方法也是可以从super对象上调用的。
class Foo {
    static classMethod() {
        return 'hello';
    }
}
class Bar extends Foo {
    static classMethod() {
        return super.classMethod() + ', too';//此时的super指代父类
    }
}
Bar.classMethod();// "hello, too"


//静态方法的继承的案例
class Human {
    constructor() {}
    static ping() {
        return 'ping';
    }
}

class Computer extends Human {
    constructor() {
        super();//super此处指代父类构造函数
    }
    static pingpong() {
        return super.ping() + ' pong';//super此处指代父类
    }
}
Computer.pingpong(); // 'ping pong'