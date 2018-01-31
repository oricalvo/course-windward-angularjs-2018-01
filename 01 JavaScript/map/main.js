var map = {};

// map["ori"] = true;
// map["roni"] = true;
//
// for(var key in map) {
//     console.log(key + ": " + map[key]);
// }
//
// console.log(map.hasOwnProperty("ori"));
// console.log(map.hasOwnProperty("udi"));
//
// console.log(map["udi"]);

var ori = {id:1};
var roni = {id:2}
map[ori] = roni;

console.log(map.hasOwnProperty(ori));
console.log(map.hasOwnProperty(roni));

console.log(ori.toString());
console.log(roni.toString());
