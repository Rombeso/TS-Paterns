export {}
interface Prototype<T> {
    clone(): T
}

class UserHistory implements Prototype<UserHistory> {
    createdAt: Date
    constructor(public email: string, public name: string) {
        this.createdAt = new Date()
    }

    public clone(): UserHistory {
        let target = new UserHistory(this.email, this.name)
        target.createdAt = this.createdAt
        return target
    }

}

const user = new UserHistory('qw@qw.ru', 'Vasya')
console.log(user)
let user2 = user.clone()
console.log(user2)
user2.email = 'ss@dd.ru'
console.log(user2)