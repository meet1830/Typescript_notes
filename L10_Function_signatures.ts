let test: Function;
// defining data type as function. but can define type of function using func signature

// () => void
// this is a function signature which says that function takes no argument and returns no value

let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};
// called a and b in definition can call anything in declaration. they should be strings
// here greet cannot be a const bc reassigning when declaring it will give error

let calc: (a: number, b: number, c: string) => number;
calc = (num1, num2, action) => {
  if (action == "add") {
    return num1 + num2;
  } else {
    return num1 - num2;
  }
};

let logDetails: (obj: { name: string; age: number }) => void;
logDetails = (ninja: { name: string; age: number }) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};

type person = { name: string; age: number };
let logDetails2 = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};
