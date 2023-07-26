/* Object types can be anonymous */

function greet(person: { name: string; age: number }) {
    return "Hello " + person.name;
}

/* or they can be named by using either an interface: */

interface Person{
    name: string;
    age: number;
}
   
function greeting(person: Person) {
    return "Hello " + person.name;
}

/* or a type alias: */
type TypePerson = {
    name: string;
    age: number;
};
   
function greetings(person: TypePerson) {
    return "Hello " + person.name;
}