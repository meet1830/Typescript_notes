// tuples are array like they are defined by square brackets and they can also use array methods but there is a difference. The type of data in each position in a tuple is fixed once it is initialized

let arr = ["ryu", 25, true];
// any position in this array now can be boolean, string or a number
// hence if we wanted to we could reset these positions
arr[0] = false;
arr[1] = "yoshi";

// or completely rewrite the array with the same three types
arr = [30, false, "yoshi"];

// here each type can be on any position.
// but in tuple once defined a certain type on certain position then we cannot change that type from that position

// defining tuple, defining with sq brackets with what types we want at that position, or else if initialized directly it will think this is an array
let tup: [string, number, boolean] = ["ryu", 5, true];
// tup = [40, 'ryu', true]; => gives error

// changing the values at the position is allowed
tup[0] = "ten";
tup[1] = 30;
tup[2] = false;

// in invoices and payments can implement this

import { HasFormatter } from "./L16_0_Interfaces_with_classes";
import { Invoice } from "./L16_Invoice";
import { Payment } from "./L16_Payments";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form?.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  // values = [tofrom.value, details.value, amount.valueAsNumber];
  // if it is just an array then [...values] gives error as it does not know what type of each item is. as long as we dont put this in different values in different areas it does not know as it is not specified that index 0 would be a string, etc and we are expecting explicit types in our invoices and payments hence error
  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  //   list.render(doc, type.value, "end");
});
