import { HasFormatter } from "../interfaces/HasFormatter.js";
export class Invoice3 implements HasFormatter {
    client: string;
    details: string;
    amount: number;
  
    constructor(a: string, b: string, c: number) {
      this.client = a;
      this.details = b;
      this.amount = c;
    }
  
    format() {
      return `${this.client}`;
    }
  }