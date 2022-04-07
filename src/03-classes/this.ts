class TPayment {
    private date: Date = new Date();

    getDate(this: TPayment) {
        return this.date;
    }

    getDateArrow = () => {
        return this.date;
    }
}

const tp = new TPayment();

const tuser = {
    id: 1, 
    paymentDate: tp.getDate.bind(tp),
    paymentDateArrow: tp.getDateArrow
}

console.log(tp.getDate());
console.log(tuser.paymentDate());
console.log(tuser.paymentDateArrow());

class TPaymentPersistent extends TPayment {
    save() {
        return this.getDateArrow();
    }
}

console.log(new TPaymentPersistent().save());