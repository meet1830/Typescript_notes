// enums are special type in ts which allow us to store set a constants or keywords and associate them with a new merit value
// having interfaces with Type T and making objects out of it, there can many more of them and becomes harder to manage that which object implements which type of interface 
// now there is one parameter resourceType that changes with each interface created
// hence making a const for that parameter

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface Resource<T> {
    uid: number,
    resourceType: ResourceType,
    data: T
}

const docOne: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: {title: 'name of the wind'}
}

// through this we need not to remember what resource was related to what number. 

const docTwo: Resource<object> = {
    uid: 2,
    resourceType: ResourceType.PERSON,
    data: {name: "yoshi"}
}

console.log(docOne, docTwo);

// here in console besides resourcetype it does not say book or person but the index number of that that is defined in enum
// hence eliminated remembering what resource was related to what number