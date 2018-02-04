"use strict";

function g() {
    console.log(this);
}

var obj = {
    id: 123,
    log: function(type) {
        console.log(type + ": " + this.id);
    }
};

var obj2 = {
    id: "xxx",
};

obj.log.call(obj2, "ERR");

function wrap() {
    function g() {
        this
    }
}