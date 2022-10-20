import { HasFormatter } from "./L16_0_Interfaces_with_classes.js";

export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes Rs.${this.amount} for ${this.details}`;
  }
}

// through this we can make sure that every object that is created using this class has the HasFormatter interface
// if it did not have format method then would give an error
