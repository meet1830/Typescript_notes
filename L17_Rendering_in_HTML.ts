import { HasFormatter } from "./L16_0_Interfaces_with_classes";
import { Invoice } from "./L16_Invoice";
import { Payment } from "./L16_Payments";

// render the list in HTML
// this class will do two things
// 1. Register a list container (ul) in the constructor
/* 2. create a render method to render new 'li' to the container
    -- accepts arguments: invoice or payment, a heading, a position
    -- create the HTML template (li, h4, p)
    -- add the 'li' template to the start/end of the list
*/

export class listTemplate {
  constructor(private container: HTMLUListElement) {}

  render(item: HasFormatter, heading: string, pos: "start" | "end") {
    // pos can have only two values

    const li = document.createElement("li");

    const h4 = document.createElement("h4");
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement("p");
    p.innerText = item.format();
    li.append(p);

    // see if have to render it at start or at end
    if (pos === "start") {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}

// to render in app.js
const ul = document.querySelector("ul")!;
const list = new listTemplate(ul);

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form?.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, "end");
});

// compile to js