class User2 {
    constructor(public userId: number) {
    }
}

class CommandHistory {
    public command: Command[] = []

    push(command: Command) {
        this.command.push(command)
    }
    remove(command: Command) {
        this.command = this.command.filter( c => c.commandId !== command.commandId)
    }
}

abstract class Command {
    public commandId: number

    abstract execute(): void

    constructor(public history: CommandHistory) {
        this.commandId = Math.random()
    }
}

class AddUseCommand extends Command {

    constructor(
        private user: User2,
        private receiver: UserService1,
        history: CommandHistory
    ) {
        super(history);
    }
    execute() {
        this.receiver.saveUser(this.user)
        this.history.push(this)
    }

    undo() {
        this.receiver.deleteUser(this.user.userId)
        this.history.remove(this)
    }

}

class UserService1 {
    saveUser(user: User2) {
        console.log(`Save user with id ${user.userId}`)
    }

    deleteUser(userId: number) {
        console.log(`Delete user with id ${userId}`)
    }
}

class Controller1 {
    reviver:  UserService1
    history: CommandHistory = new CommandHistory()

    addReceiver(receiver: UserService1) {
        this.reviver = receiver
    }

    run() {
        const addUserCommand = new AddUseCommand(
            new User2(1),
            this.reviver,
            this.history
        )
        addUserCommand.execute()

        console.log(addUserCommand.history)
        addUserCommand.undo()
        console.log(addUserCommand.history)
    }
}

const controller1 = new Controller1()
controller1.addReceiver( new UserService1())
controller1.run()