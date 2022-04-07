interface PPaymentPersistent {
    id: number;
    sum: number;
    from: string;
    to: string;
}

type PPayment = Omit<PPaymentPersistent, 'id'>;
type PPaymentRequisits = Pick<PPaymentPersistent, 'from' | 'to'>;

type ExtractEx = Extract<'from' | 'to' | PPayment, string>;
type ExcludeEx = Exclude<'from' | 'to' | PPayment, string>;