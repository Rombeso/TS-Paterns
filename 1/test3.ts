enum Status {
    SUCCESS ="success",
    FAILED = "failed"
}

interface Request {
    sum: number,
    from: number,
    to: number
}

interface DataSuccess extends Request {
    databaseId: number
}

interface DataError {
    errorMessage: string,
    errorCode: number,
}

interface IResponseSuccess {
    status: Status.SUCCESS,
    data: DataSuccess
}

interface IResponseError {
    status: Status.FAILED,
    data: DataError
}

type MyResponseType = IResponseSuccess | IResponseError