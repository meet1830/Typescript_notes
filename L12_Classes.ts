class Invoice {
  client: string;
  details: string;
  amount: number;

  // initialize these properties inside a constructor
  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  // format function which returns a string
  format() {
    return `${this.client} owns ₹${this.amount} for ${this.details}`;
  }
}

const inv1 = new Invoice("mario", "work on the mario website", 250);
const inv2 = new Invoice("luigi", "work on the luigi website", 300);

console.log(inv1, inv2);

let invoices: Invoice[] = [];
invoices.push(inv1);
invoices.push(inv2);

console.log(invoices);

// all values of class are public by default hence can change them
inv1.client = "yoshi";
inv2.amount = 400;