class A {}
class B extends A {
    constructor() {
        super();
    }
}

class A {
    constructor() {
        console.log(new.target.name);//
    }
}
class B extends A {
    constructor() {
        super();
    }
}
new A(); // A
new B(); // B

class A {}
class B extends A {
    m() {
        //super(); // 报错
    }
}

class A {
    p() {
        return 2;
    }
}
class B extends A {
    constructor() {
        super();
        console.log(super.p()); // 2  super指向A.prototype
    }
    f(){
        console.log(super.p()); // 2  super指向A.prototype
    }
}
let b = new B();
b.f();

class A {
    constructor() {
        this.p = 2;
    }
}
class B extends A {
    get m() {
        return super.p;
    }
}
let b = new B();
b.m; // undefined 因为super代表A.prototype, A.prototype上并没有p属性

//如果属性定义在父类的原型对象上，super就可以取到。
class A {}
A.prototype.x = 2;
class B extends A {
    constructor() {
        super();
        console.log(super.x) // 2
    }
}
let b = new B();

class A {
    constructor() {
        this.x = 1;
    }
    print() {
        console.log(this.x);
    }
}
class B extends A {
    constructor() {
        super();
        this.x = 2;
    }
    m() {
        super.print();
    }
}
let b = new B();
b.m();// 2