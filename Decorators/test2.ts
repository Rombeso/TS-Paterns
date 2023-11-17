interface IUserService {
    user: number;
    getUsersInDatabase(): number;
}


class UserService2 implements IUserService {
    user: number = 1000;
    @Log()
    getUsersInDatabase(): number {
        throw new Error('Ошиибка')
    }
}

function Log(rethrow: boolean = false) {
    return (
        target: Object,
        _: string | symbol,
        descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
    ): TypedPropertyDescriptor<(...arg: any[]) => any> | void => {
    const oldValue = descriptor.value
    descriptor.value = async (...args: any[]) => {
       try{
           return await oldValue?.apply(target, args)
       }catch(e){
           if (e instanceof Error){
               console.log(e.message)
               if (rethrow) {
                   throw e
               }
           }
       }
    }}
}


console.log(new UserService2().getUsersInDatabase())