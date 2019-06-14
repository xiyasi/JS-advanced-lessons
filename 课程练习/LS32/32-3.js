class MyClass {
    constructor(prop) {
        this._prop = prop;
    }
    get prop() {
        return this._prop;
    }
    set prop(value) {
        this._prop = value;
    }
}

let inst = new MyClass(23);
console.log(inst.prop);//23
inst.prop = 45;
console.log(inst.prop);//45

class Rectangle {
    constructor(length, width) {
        console.log(new.target === Rectangle);
        this.length = length;
        this.width = width;
    }
}
var obj = new Rectangle(3, 4); // 输出 true

{
    let Foo = class {};
    class Bar extends Foo {
    }
}

let person = new class {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
}('张三');
person.sayName();

const MyClass = class Me {
    getClassName() {
        return Me.name;
    }
};