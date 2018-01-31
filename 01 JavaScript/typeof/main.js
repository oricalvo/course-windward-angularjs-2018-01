var x = g();

var str = typeof x;

console.log(str);

function g() {
    return function(){};
}
