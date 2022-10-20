import { HasFormatter } from "./L16_0_Interfaces_with_classes";
import { Invoice } from "./L16_Invoice";
import { Payment } from "./L16_Payments";

let docOne: HasFormatter;
// this variable must be of type hasformatter. it has to implement the hasformatter interface
let docTwo: HasFormatter;

docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Payment("mario", "plumbing work", 200);

// this structures the code a little bit more and makes things more secure for us

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);
// all elements in this array will implement the interface. hence restricting the elements inside the array

console.log(docs);

// the format method can be applied to each element inside the array

let type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

let doc: HasFormatter;
if (type.value === "invoice") {
  doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
} else {
  doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
}

console.log(doc);
