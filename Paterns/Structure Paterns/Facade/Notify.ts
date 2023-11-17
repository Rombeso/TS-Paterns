class Notify {
    send(template: string, to: string) {
        console.log(`Отправлю ${template}: ${to}`)
    }
}

class Log2 {
    log(massage: string) {
        console.log(massage)
    }
}

class Template {
    private templates = [
        {name: 'other', template: '<h1>шаблон!</h1>'}
    ]

    getByName(name: string) {
        return this.templates.find(t => t.name === name)
    }
}

class NotificationFacade {
    private notifi: Notify
    private log: Log2
    private template: Template

    constructor() {
        this.notifi = new Notify()
        this.log = new Log2()
        this.template = new Template()
    }

    send(to: string, templateName: string) {
        const data = this.template.getByName(templateName)
        if (!data) {
            this.log.log('Not found template')
            return
        }
        this.notifi.send(data.template, to)
        this.log.log('It\'s OK')
    }
}

const s = new NotificationFacade()

console.log(s.send('a@s.ru', 'other'))