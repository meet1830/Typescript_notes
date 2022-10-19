// variable declared such that it can change type in future
let age: any = 25;

let age2: any;
age = 25;

// it is not of type number, it is of type any. hence can update value as
age = true;

age = { name: "meet" };

let mixed: any[] = [];
// mixed = {}; -> gives error, will accept any type of array only

let mixed2: any = [];
// both same

mixed.push(2);
mixed.push("meet");
mixed.push(true);
console.log(mixed);

let ninja: {
  name: any;
  age: any;
};

ninja = {
  name: "yoshi",
  age: 25,
};

ninja = {
  name: true,
  age: "yoshi",
};
