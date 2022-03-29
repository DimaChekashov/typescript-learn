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

new ParsistendEPayment();

class EUser {
    name: string = 'user';

    constructor() {
        console.log(this.name);
    }
}

class EAdmin extends EUser {
    name: string = 'admin';

    constructor() {
        super();

        console.log(this.name);
    }
}

new EAdmin();

// new Error('');

class HttpError extends Error {
    code: number;
    
    constructor(message: string, code?: number) {
        super(message);
        this.code = code ?? 500;
    }
}