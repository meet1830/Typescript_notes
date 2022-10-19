// EXPLICIT TYPES

let character: string;
let age: number;
let isLoggedIn: boolean;
// declare the variable but dont give it a value, it would be of type string when given value

// age = "luigi" --> error
age = 20;

// ARRAYS
let names: string[];
// can only be an array of strings

// names = [10, 23]; --> error

// should also want to initialize the array with an empty array so that can use push method on it, or else will not give error here but will give error in console
let ninjas: string[] = [];

ninjas.push("shaun");

// UNION TYPES
// want to initialize the array with string, number and boolean types
let mixed: (string | number | boolean)[] = [];

mixed.push("hello");
mixed.push(20);
mixed.push(false);

// can use union type with normal variables also
let uid: string | number;
(uid = 123), (uid = "_123_");
// uid = true --> error

// OBJECTS
let ninja1: object;

ninja1 = { name: "yoshi", age: 30 };

// ninja1 = 'meet' --> error
ninja1 = [];
// no error as array is an object

// more specifically, declaring the variable as an object and declaring the type of properties inside it
let ninja2: {
  name: string;
  age: number;
  beltColor: string;
};
// object ninja2 initialized will need to have also these properties with it, adding and eliminating prop will give error
