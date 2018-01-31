var createObjectPool = (function() {
    "use strict";

    var MAGIC_FIELD = "###MYUNIQUEID###";
    var nextId = 0;

    function getHashCode(obj) {
        var id = obj[MAGIC_FIELD];
        if (!id) {
            id = obj[MAGIC_FIELD] = ++nextId;
        }

        return id;
    }

    function createObjectPool() {
        var map = {};

        function add(obj) {
            var hashCode = getHashCode(obj);
            map[hashCode] = obj;
        }

        function contains(obj) {
            var hashCode = getHashCode(obj);
            return map.hasOwnProperty(hashCode);
        }

        function pop() {
            for (var key in map) {
                var obj = map[key];
                delete map[key];
                return obj;
            }

            return undefined;
        }

        return {
            add,
            contains,
            pop,
        };
    }

    return createObjectPool;
})();
