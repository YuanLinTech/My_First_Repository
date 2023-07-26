function setCoordinate(coord) {
    var x = coord[0], y = coord[1], z = coord[2];
    console.log("Provided coordinates had ".concat(coord.length, " dimensions"));
}
setCoordinate([1, 2]);
setCoordinate([1, 2, 3]);
var a = ["world", 3, true, false, true, false, true];
var b = ["beautiful", true, false, 2];
var c = [true, false, true, "world", 3,];
function readButtonInput() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var name = args[0], version = args[1], input = args.slice(2);
    console.log("name: ".concat(name, ", version: ").concat(version));
    input.forEach(function (bool) { return console.log(bool); });
}
readButtonInput.apply(void 0, a);
