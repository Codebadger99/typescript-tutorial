"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice3 = void 0;
class Invoice3 {
    constructor(a, b, c) {
        this.client = a;
        this.details = b;
        this.amount = c;
    }
    format() {
        return `${this.client}`;
    }
}
exports.Invoice3 = Invoice3;
//# sourceMappingURL=invoice.js.map