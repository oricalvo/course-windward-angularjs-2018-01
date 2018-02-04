"use strict";

var Counter = (function() {
    var nextId = 0;

    function Counter() {
        this.id = ++nextId;
        this.val = 0;

        console.log("Counter.ctor", this.id);
    }

    Counter.prototype.inc = function () {
        ++this.val;

        setTimeout(() => {
            console.log(this.val);
        }, 1000);
    }
    Counter.prototype.dec = function () {
        --this.val;
    }
    Counter.prototype.get = function () {
        return this.val;
    }

    return Counter;
})();

var CounterEx = (function() {
    function CounterEx(initialValue) {
        Counter.call(this);

        this.initialValue = initialValue;
    }

    CounterEx.prototype = Object.create(Counter.prototype);

    CounterEx.prototype.reset = function() {
        this.val = this.initialValue;
    }

    return CounterEx;
})();

var c1 = new CounterEx(1000);
c1.inc();

//console.log(c1.get());
