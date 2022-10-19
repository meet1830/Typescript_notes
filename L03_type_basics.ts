// ts uses script datatypes, once if datatype is string, then cannot changed dynamically to anything else

let character = "mario";

// ts does not have int and float as different, just have a number type
let age = 10;

// character = 20; -> error
character = "luigi"; // no error

const circumference = (diameter: number) => {
  return diameter * Math.PI;
};
// console.log(circumference('meet'));
// without specifying type, will not give any error -> getting clog as NaN
// after specifying, will give error and code will not compile, hence done in compile time and not run time at the time of rendering in browser

console.log(circumference(4));
