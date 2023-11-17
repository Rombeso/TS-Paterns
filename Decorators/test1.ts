// Декоратор который добавляет свойство createAt в класс, фиксирует дату создания

interface IUserService {
    user: number;
    getUsersInDatabase(): number;
}

@AddCreatedAtProperty
class UserService implements IUserService {
    user: number = 1000;

    getUsersInDatabase(): number {
        return this.user;
    }
}

function AddCreatedAtProperty<T extends { new(...arg: any[]): {}}>(constructor: T) {
    return class extends constructor {
        createAt = new Date()
    }
}

type CreateAt = {
    createAt: Date
}

console.log((new UserService() as IUserService & CreateAt).createAt)