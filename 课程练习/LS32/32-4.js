class Foo {
    static classMethod() {
        return 'hello';
    }
}
Foo.classMethod(); // 'hello'
var foo = new Foo();
foo.classMethod();

class Foo {
    static bar () {
        this.baz();
    }
    static baz () {
        console.log('hello');
    }
    baz () {
        console.log('world');
    }
}
Foo.bar(); 

class Foo {
    static baz () {
        console.log('hello');
    }
    baz () {
        console.log('world');
        Foo.baz();//
    }
    static fun1(o){
        // this.fun2();//报错
        o.fun2();
    }
    fun2(){
        console.log("fun2")
    }
}
var a = new Foo();
a.baz();//world hello

Foo.fun1(a);//fun2

class Foo {
}
Foo.prop = 1;
Foo.prop // 1

class MyClass {
    static myStaticProp = 42;
    constructor() {
        console.log(MyClass.myStaticProp); // 42
    }
}