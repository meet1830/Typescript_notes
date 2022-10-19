class Invoice {
  readonly client: string;
  private details: string;
  public amount: number;
  // same as -> amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    // this.client = "something else"; 
    // error for readonly, for public does not give any error but the value also does not change

    return `${this.client} owns ₹${this.amount} for ${this.details}`;
  }
}

const inv1 = new Invoice("mario", "work on the mario website", 250);
const inv2 = new Invoice("luigi", "work on the luigi website", 300);

let invoices: Invoice[] = [];
invoices.push(inv1);
invoices.push(inv2);

invoices.forEach((inv) => {
  // console.log(inv.client, inv.details, inv.amount, inv.format());
  console.log(inv.client, inv.amount, inv.format());
});
// mario work on the mario website 250 mario owns ₹250 for work on the mario website
// luigi work on the luigi website 300 luigi owns ₹300 for work on the luigi website

// if marked private on any of the properties then foreach will get error saying that it cannot access the value since it is private
// private - cannot access values from outside of the class
// can still access it via format method

// readonly value can be read from inside and outside the class but cannot be changed
// inv1.client = "something else"; -> error
// inside the format function -> error

// public -> inside = change, outside = change
// private -> inside = change, outside = nochange
// readonly -> inside = nochange, outside = nochange



// need not to define the properties first and then in constructor - shorthand
// can do it all in constructor itself
class Invoice2 {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owns ₹${this.amount} for ${this.details}`;
  }
}
// the constructor automatically assigns these properties to the class
// need to have the access modifiers defined even if want them to be public if want to define properties of class like this. does not give error in consructor, gives error in this.client, this.amount, this.details

const inv12 = new Invoice2("mario", "work on the mario website", 250);
const inv22 = new Invoice2("luigi", "work on the luigi website", 300);

console.log(inv12.format());
// mario owns ₹250 for work on the mario website

console.log(inv22.format());
// luigi owns ₹300 for work on the luigi website