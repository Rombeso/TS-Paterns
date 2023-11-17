
const tooString = <T>(data: T): string | undefined => {
    if(Array.isArray(data) ) {
        return data.join('')
    }
    if(data !== null && typeof data === 'object' ) {
        return JSON.stringify(data)
    }
    if(typeof data === "number") {
        return data.toString()
    }
    if(typeof data === 'string'){
        return data
    }
}

console.log(tooString<string>('string'))
console.log(tooString<number>(555))
console.log(tooString<number[]>([1,2,3]))
console.log(tooString<Record<string, number | string>>({qwe: 23, 1212: 123}))
console.log(tooString<symbol>(Symbol('weww')))
console.log(tooString<null>(null))