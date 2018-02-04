// var a = {
//     id: 123,
// };
//
// var b = Object.create(a);
//
// console.log(b.id);

function A() {
    console.log("A.ctor");
    this.id = 6;
}

A.prototype.run = function() {
    console.log("A.run");
}

function B() {
    A.call(this);

    console.log(this.id);
}

B.prototype = Object.create(A.prototype);

B.prototype.run = function() {
    A.prototype.run.call(this);

    console.log("B.run");
}

var b = new B();
b.run();
