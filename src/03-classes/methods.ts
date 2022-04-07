enum MPaymentStatus {
    Holder,
    Processed,
    Reversed
}

class MPayment {
    id: number;
    status: MPaymentStatus = MPaymentStatus.Holder;
    createdAt: Date = new Date();
    updatedAt: Date;

    constructor(id: number) {
        this.id = id;
    }

    getPaymentLifeTime(): number {
        return new Date().getTime() - this.createdAt.getTime();
    }

    unholdPayment(): void {
        if(this.status == MPaymentStatus.Processed) {
            throw new Error('Платеж не может быть возвращен!');
        }
        this.status = MPaymentStatus.Reversed;
        this.updatedAt = new Date();
    }
}

const mpayment = new MPayment(1);
mpayment.unholdPayment();
console.log(mpayment);
const time = mpayment.getPaymentLifeTime();
console.log(time);