function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
      return [obj];
    }
  return obj;
}

interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;

// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();

// Since the backpack variable is a string, you can't pass a number to the add function.
// backpack.add(23); Argument of type 'number' is not assignable to parameter of type 'string'.
backpack.add("My bag");

// In a structural type system, if two objects have the same shape, they are considered to be of the same type.
interface Point {
    x: number;
    y: number;
}

function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);

// The shape-matching only requires a subset of the object’s fields to match.

const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"
 
const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"
 
/*
const color = { hex: "#187ABF" };
logPoint(color);

Argument of type '{ hex: string; }' is not assignable to parameter of type 'Point'.
Type '{ hex: string; }' is missing the following properties from type 'Point': x, y

*/

/* There is no difference between how classes and objects conform to shapes. 
If the object or class has all the required properties, TypeScript will say they match, regardless of the implementation details.
*/
class VirtualPoint {
    x: number;
    y: number;
   
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
}
   
const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"