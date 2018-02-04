function Counter() {
    var val = 0;

    function inc() {
        ++val;
    }

    function dec() {
        --val;
    }

    function get() {
        return val;
    }

    return {
        inc,
        dec,
        get,
    };
}

function Dummy() {
}

var d = new Dummy();

d.c1 = new Counter();
d.c2 = new Counter();

c1.inc();
c1.dec();
c1.inc();

console.log(c1.get == c2.get);
//console.log(c2.get());
