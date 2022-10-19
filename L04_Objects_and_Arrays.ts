// ARRAYS
let names = ["luigi", "mario", "yoshi"];

names.push("toad");

// names.push(4); --> gives error
// can add elements of only same datatype in array

// names[0] = 4; --> error

let mixed = [1, 2, "ken", 8, "chun-li"];
// no error, array has two diff datatypes(can have more), now can add or modify elements only of the same datatypes which exist initially in the array
mixed.push("ryu");
mixed.push(10);

// can modify the datatypes of elements within the datatypes that exist in the array
mixed[2] = 3;

// OBJECTS
let ninja = {
  name: "mario",
  belt: "black",
  age: 30,
};

// each key value pair in object behaves same as an individual variable, type cannot change
ninja.age = 20;
// ninja.age = '20' --> error

// once object defined cannot add additional properties to it of any data type
// ninja.skills = ['sneaking', 'fighting'] --> error

// can override the array
ninja = {
  name: "mario",
  belt: "green",
  age: 23,
};
// here can override only if the structure of the object, same number of key value pairs with the same keys(properties) exist. the values can be changed
