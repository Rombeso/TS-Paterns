interface IPaymentApi {
    getPaymentDetail(id: number): IPaymentDetail | undefined
}

interface IPaymentDetail {
    id: number
    sum: number
}

class PaymentApi implements IPaymentApi {
    private data = [{id: 1, sum: 10000}]
    getPaymentDetail(id: number): IPaymentDetail | undefined {
        return this.data.find(el => el.id === id)
    }
}

class PaymentAccessProxy implements IPaymentApi{
    constructor(private api: PaymentApi, private user: number) {
    }

    getPaymentDetail(id: number): IPaymentDetail | undefined {
        if(this.user === 1) {
            return this.api.getPaymentDetail(id)
        }
        console.log('Warning!')
        return undefined;
    }
}

let res = new PaymentAccessProxy(new PaymentApi, 1)
console.log(res.getPaymentDetail(1))

let res2 = new PaymentAccessProxy(new PaymentApi, 2)
console.log(res2.getPaymentDetail(1))