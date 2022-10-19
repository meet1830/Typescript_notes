const anchor = document.querySelector("a");

console.log(anchor);

// console.log(anchor.href);
// gives error because ts does not have direct access to the html file and hence gives error that the link's href can be null
// for that
if (anchor) {
  console.log(anchor.href);
}


const anchor2 = document.querySelector("a")!;
console.log(anchor2.href);
// adding an ! after the selector tells that it will surely return a value and hence ts does not give any error
//  type of anchor and anchor2 = HTMLAnchorElement. based on this will intellisense and suggest the properties which we can use


const form = document.querySelector("form")!;
// type of form = HTMLFormElement


// there can be more than one forms in html page. to know that we have selected the correct form we can use classnames
const form2 = document.querySelector(".new-item-form")!;
// but here type is element and not form element. is ! is not added then type becomes element | null.
// class can be applied to any element in html hence ts does not know which type of element it is


// can TYPE CAST it to a certain type of element that we know it will be.
const form3 = document.querySelector(".new-item-form") as HTMLFormElement;
// remove ! when use "as" bc when we use as it will always be certain type and will not be null
// now has access to all the intelisense of the right properties for that element in vs code
console.log(form3.children);


// grabbing by IDs
const type = document.querySelector("#type") as HTMLSelectElement;


const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;


form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});

// amount.value gets converted to string by js when print to console
// hence use amount.valueAsNumber