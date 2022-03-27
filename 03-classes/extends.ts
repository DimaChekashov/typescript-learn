type EPaymentStatus = 'new' | 'paid';

class EPayment {
    id: number;
    status: EPaymentStatus = 'new';

    constructor(id: number) {
        this.id = id;
    }

    pay() {
        this.status = 'paid';
    }
}

class ParsistendEPayment extends EPayment {
    databaseId: number;
    paidAt: Date;

    constructor() {
        const id = Math.random();
        super(id);
    }

    save() {

    }

    override pay(date?: Date) {
        super.pay();
        if(date) {
            this.paidAt = date;
        }
    }
}

// new ParsistendEPayment().