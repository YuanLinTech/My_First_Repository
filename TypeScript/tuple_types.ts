type Either2dOr3d = [number, number, number?];
 
function setCoordinate(coord: Either2dOr3d) {
    const [x, y, z] = coord;
    console.log(`Provided coordinates had ${coord.length} dimensions`);
}

setCoordinate([1, 2]);
setCoordinate([1, 2, 3]);

type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];

const a: StringNumberBooleans = ["world", 3, true, false, true, false, true];
const b: StringBooleansNumber = ["beautiful", true, false, 2];
const c: BooleansStringNumber = [true, false, true, "world", 3,];