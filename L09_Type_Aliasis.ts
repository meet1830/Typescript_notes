// specifying the types of variables can get quiet long when working with functions
const logDetails = (uid: string | number, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};
const greet = (user: { name: string; uid: string | number }) => {
  console.log(`${user.name} says hello`);
};
// also the same parameters may repeat for different functions and hence they get repeated

// can define type aliases and can use it as a variable in type declaration
type StringOrNum = string | number;

const logDetails2 = (uid: StringOrNum, item: string) => {
  console.log(`${item} 2 has a uid of ${uid}`);
};
const greet2 = (user: { name: string; uid: StringOrNum }) => {
  console.log(`${user.name} 2 says hello`);
};

// also
type UserWithName = { name: string; uid: StringOrNum };
const greet3 = (user: UserWithName) => {
  console.log(`${user.name} 3 says hello`);
};
