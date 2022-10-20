// interfaces allows us to enforce a certain structure of a class or an object
// interfaces are not used to create objects they are just used to define a structure within classes or objects
// hence does not have constructor
// but if any variable declares its type to be isPerson then it should have the structure as defined

interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: isPerson = {
  name: "shaun",
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spent: ", amount);
    return amount;
  },
};

console.log(me);

let someone: isPerson;
// now later when defined then will have to match the structure of the interface

const greetPerson = (person: isPerson) => {
    console.log("hello", person.name)
}
// object as argument should follow the interface structure
// person.name given by intellisense as it knows that it will follow this structure

// greetPerson({name: 'meet'}); => error
greetPerson(me);