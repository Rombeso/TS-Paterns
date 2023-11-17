class EventEmitter {

    listeners = {
        // [eventName]: [callBack, callBack]
    }

    subscribe(eventName, callback) {
        const subs = this.listeners[eventName] ?? []
        subs.push(callback)
        this.listeners[eventName] = subs

        return () => this.unsubscribe(eventName, callback)
    }

    unsubscribe(eventName, callback) {
        const subs = (this.listeners[eventName] ?? []).filter(item => item !== callback)
        console.log('!!!', subs)
        if (subs.length === 0) {
            delete this.listeners[eventName]
        } else {
            this.listeners[eventName] = subs
        }
    }
    // emit
    emit(eventName, data) {
        const subs = this.listeners[eventName] ?? []
        subs.forEach(callback => callback.call(null, data))
    }
}

const eventEmitter = new EventEmitter()

eventEmitter.subscribe('on', () => console.log('Лампочка вкл 1'))
let two = eventEmitter.subscribe('on', () => console.log('Лампочка вкл 2'))
eventEmitter.subscribe('on', () => console.log('Лампочка вкл 3'))

eventEmitter.emit('on')
two()
eventEmitter.emit('on')

// https://www.youtube.com/watch?v=8uouGwuNTcM&t=1s