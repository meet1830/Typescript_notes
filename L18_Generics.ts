// generics allows to create reusable blocks of code which can be used with different types

// function takes in an object with any properties as argument and returns a new object with unique id attached to it based on the old object

const addUID = (obj: object) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: 'yoshi', age: 40});

console.log(docOne);

// console.log(docOne.name);
// gives error because the function definition does specify what type of object will be entered hence ts does not know if it has a name property or not

console.log(docOne.uid); 
// does not give error as it is added in the function and hence it know this property


// can make for this by
// it captures what properties are there in the object and hence when it returns it knows what properties are there in the object
// can be any letter other than T but convention
const addUID2 = <T>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docTwo = addUID2({name: 'mario', age: 34});
console.log(docTwo.name);

// now are capturing what is there but are not defining that obj has to be an object
let docThree = addUID2('hello');
// gives no error


const addUID3 = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

// let docFour = addUID3("hello"); -> gives error


// can be more specific for it also
const addUID4 = <T extends {name: string, age: number}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

// let docFive = addUID4({name: 20, age: 34}); -> gives error


// using generics with interfaces
interface Resource {
    uid: number;
    resourceName: string;
    date: object;
}

// the object which is made out of this will have to have all the properties as mentioned in interface
// but we want to change some of them as they can have other properties or data types of those properties may change

interface Resource2<T> {
    uid: number;
    resourceName: string;
    date: T;
}
// here the objects type will be whatever data we type in when creating an object

const docSix: Resource = {
    uid: 1,
    resourceName: 'person',
    // date: 'meet' -> gives error
    date: {name: "shaun"}
}

const docSeven: Resource2<string> = {
    uid: 1,
    resourceName: 'person',
    date: 'meet',
}
// flexible data type - its datatype will be the type which is defined at its creation

const docEight: Resource2<string[]> = {
    uid: 2,
    resourceName: 'shopping list',
    // date: [] => works
    date: ['bread', 'milk']
}

console.log(docSeven, docEight);