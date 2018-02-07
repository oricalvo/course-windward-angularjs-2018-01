class A {
    constructor(id) {
        this._id = id;
    }

    print() {
        console.log("A");
    }

    get id() {
        return this._id;
    }

    // set id(val) {
    //     if(typeof val != "number") {
    //         throw new Error("Invalid val");
    //     }
    //
    //     this._id = val;
    // }
}

class B extends A {
    constructor(id) {
        super(id);
    }

    print() {
        super.print();

        console.log("B");
    }
}

const b = new B(10);
b.id = "xxx";
console.log(b.id);
// console.log(b);
// b.print();

//A.prototype.print.call(b);
