interface IPaymentTwo {
	sum: number;
	from: number;
	to: number;
}

enum PaymentStatusTwo {
	Success = 'success',
	Failed = 'failed',
}

interface IPaymentRequestTwo extends IPayment { }

interface IDataSuccessTwo extends IPayment {
	databaseId: number;
}

interface IDataFailedTwo {
	errorMessage: string;
	errorCode: number;
}

interface IResponseSuccessTwo {
	status: PaymentStatusTwo.Success;
	data: IDataSuccessTwo;
}

interface IResponseFailedTwo {
	status: PaymentStatusTwo.Failed;
	data: IDataFailedTwo;
}

type f = (res: IResponseSuccessTwo | IResponseFailedTwo) => number;

type Res = IResponseSuccessTwo | IResponseFailedTwo;

function isSuccess(res: Res): res is IResponseSuccessTwo {
	if(res.status === PaymentStatusTwo.Success) {
		return true;
	}
	return false;
}

function getIdFromData(res: Res): number {
	if (isSuccess(res)) {
		return res.data.databaseId;
	} else {
		throw new Error(res.data.errorMessage);
	}
}