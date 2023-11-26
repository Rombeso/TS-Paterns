interface IMiddleware {
    next(mid: IMiddleware): IMiddleware

    handle(request: any): any
}

abstract class AbstrtactMiddleware implements IMiddleware {
    private nextMiddleware: IMiddleware

    handle(request: any): any {
        if (this.nextMiddleware) {
            return this.nextMiddleware.handle(request)
        }
        return
    }

    next(mid: IMiddleware): IMiddleware {
        this.nextMiddleware = mid
        return mid
    }
}

class AuthMiddleware extends AbstrtactMiddleware {
    override handle(request: any): any {
        console.log('AuthMiddleware')
        if (request.userId === 1) {
            return super.handle(request);
        }
        return {
            error: 'You are not authorisation'
        }
    }
}

class ValidateMiddleware extends AbstrtactMiddleware {
    override handle(request: any): any {
        console.log('ValidateMiddleware')
        if (request.body) {
            return super.handle(request);
        }
        return {
            error: 'Don\'t have body'
        }
    }
}

class Controller extends AbstrtactMiddleware {
    override handle(request: any): any {
        console.log('Controller')
        return {success: request}
    }
}

const controller = new Controller()
const validate = new ValidateMiddleware()
const auth = new AuthMiddleware()

auth.next(validate).next(controller)

console.log(auth.handle(
    {userId: 1, body: 'Body'}
))