interface Mediator {
    notify(sender: string, event: string): void
}

abstract class Mediated {
    mediator: Mediator
    setMediator(mediator: Mediator) {
        this.mediator = mediator
    }
}

class Notifications {
    send() {
        console.log('Отправляю уведомления')
    }
}

class Log1 {
    log(massage: string) {
        console.log(massage)
    }
}
class EventHandler extends Mediated{
    myEvent() {
        this.mediator.notify('EventHandler', 'myEvent')
    }
}

class NotificationMediator implements Mediator{
    constructor(
        public notification: Notifications,
        public logger: Log1,
        public handler: EventHandler
    ) {}

    notify(sender: string, event: string): void {
        switch(event){
            case 'myEvent':
                this.notification.send()
                this.logger.log('Отправлено')
                break
        }
    }
}

const handler = new EventHandler()
const logger = new Log1()
const notifications = new Notifications()

const m = new NotificationMediator(
    notifications,
    logger,
    handler
)

handler.setMediator(m)
handler.myEvent()