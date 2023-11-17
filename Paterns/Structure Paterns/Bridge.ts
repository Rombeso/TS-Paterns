interface IProvider {
    sendMassage(massage: string): void
    connect<T>(config: T): void
    disconnect(): void
}

class TelegramProvider implements IProvider{
    connect<T>(config: T): void {
        console.log(config)
    }

    disconnect(): void {
        console.log('Disconnect TG')
    }

    sendMassage(massage: string): void {
        console.log(massage)
    }
}

class WhatsUpProvider implements IProvider{
    connect<T>(config: T): void {
        console.log(config)
    }

    disconnect(): void {
        console.log('Disconnect WU')
    }

    sendMassage(massage: string): void {
        console.log(massage)
    }
}

class NotificationSender {
    constructor(private provider: IProvider) {}

    send() {
        this.provider.connect('connect')
        this.provider.sendMassage('massage')
        this.provider.disconnect()
    }
}

class DelayNotificationSender extends NotificationSender{
    constructor(provider: IProvider) {
        super(provider)
    }

    sendDelayed() {
    }
}

const sender = new NotificationSender(new TelegramProvider())
sender.send()

const sender2 = new NotificationSender(new WhatsUpProvider())
sender2.send()