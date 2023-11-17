class EventEmitter2 {
    constructor() {
        this.events = {}
    }

    subscribe(name, callback) {
        this.events[name] = callback
    }

    unsubscribe(name) {
        this.events[name] = null
    }

    emit(name, arg) {
        if (!this.events[name]) {
            console.log(`Event ${name} undefined`)
            return
        }
        this.events[name](arg)
    }
}

const ee = new EventEmitter2()

// ee.subscribe('on', () => console.log('Вкл1'))
ee.subscribe('on', (name) => console.log(`Hello ${name}`))
ee.subscribe('off', (name) => console.log(`Hello ${name}`))
ee.emit('on', 'Vasya')
ee.unsubscribe('on')
ee.emit('on', 'Vasya')
ee.emit('off', 'Vasya22')

// https://www.youtube.com/watch?v=4SuYFxnazvg&t=12s