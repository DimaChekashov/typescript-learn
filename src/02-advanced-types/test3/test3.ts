interface IPayment {
    sum: number;
    from: number;
    to: number;
}

enum PaymentStatus {
    Success = 'success',
    Failed = 'failed',
}

interface IPaymentRequest extends IPayment {
}

interface IDataSuccess extends IPayment {
    databaseId: number;
}

interface IDataFailed extends IPayment {
    errorMessage: string;
    errorCode: number;
}

// First variant
interface IResponse {
    status: PaymentStatus;
    data: IDataSuccess | IDataFailed;
}


// Second variant (Best Choise)
interface IResponseSuccess {
    status: PaymentStatus.Success;
    data: IDataSuccess;
}

interface IResponseFailed {
    status: PaymentStatus.Failed;
    data: IDataFailed;
}