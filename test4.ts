interface IPayment {
    sum: number;
    from: number;
    to: number;
}

enum PaymentStatus {
    Success = 'success',
    Failed = 'failed',
}

interface IPaymentRequest extends IPayment { }

interface IDataSuccess extends IPayment {
    databaseId: number;
}

interface IDataFailed {
    errorMessage: string;
    errorCode: number;
}

interface IResponseSuccess {
    status: PaymentStatus.Success;
    data: IDataSuccess;
}

interface IResponseFailed {
    status: PaymentStatus.Failed;
    data: IDataFailed;
}

function isResponseSuccess(res: IResponseSuccess | IResponseFailed): res is IResponseSuccess {
    return res.status === PaymentStatus.Success
}

function isResponseFailed(res: IResponseSuccess | IResponseFailed): res is IResponseFailed {
    return res.status === PaymentStatus.Failed
}

function setResponse(res: IResponseSuccess | IResponseFailed): number {
    if (isResponseSuccess(res)) {
        return res.data.databaseId
    } else if (isResponseFailed(res)) {
        throw new Error(res.data.errorMessage)
    } else {
        throw new Error('Ошибка получения данных')
    }
}