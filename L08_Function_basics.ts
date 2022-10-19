let greet = () => {
  console.log("Hello World");
};

// greet = "meet";
// ts automatically takes the type of greet as function and will not change datatype

let greet2: Function;
// function has to be capital when declaring its type
greet2 = () => {
  console.log("hello greet2");
};

const add = (a: number, b: number) => {
  console.log(a + b);
};
add(5, 10);
// add(10, "10"); gives error

const add2 = (a: number, b: number, c?: number | string) => {
  // console.log(a + b + c); gives error as in this statement c cannot anything of a string or a number
  console.log(a + b);
  console.log(c);
};
// add2(5, 10); -> gives error as third parameter not given
// if want to make as an optional parameter, then have to put a "?" besides it
add(2, 5);

// now if we pass in a default value of c then we do not need ? and it would still remain optional
// in add2 the second console will give output as undefined
const add3 = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
};
add3(5, 10);
add3(5, 10, 20);
add3(5, 10, "20");
// convention to always define compulsory parameters first and optional parameters at the end in the function argument

// returning a value
const minus = (a: number, b: number) => {
  return a - b;
};
const result = minus(10, 7);
// here result will take the type of returned value automatically
// hover over result to see typeof number
// result += '5'; -> gives error as it has inferred that the type can only be a number

// explicitly declare return type of the function
const minus2 = (a: number, b: number): number => {
  return a - b;
};
// dont need this but increases readability

// if a function does not return something it technically returns void
// hover over add3 to see void return type
// or can do this
const minus3 = (a: number, b: number): void => {
  console.log(a - b);
};

// when void is compiled into js it will come undefined but they both are very different
// undefined means that any optional parameter which does not have a default value and then we do not pass any value either so it becomes undefined. whereas void is complete lack of any return value
