const a = 'aaaavsvadsvdddssaawdfffew';
const b = 'aabbccddsseee';
const c = 'abcd';
const d = 'qwerrewqqw'
function unique(str) {
    let result = []
    let arr = str.split('');
    arr.forEach(
        el => {if (!result.includes(el)) {
            result.push(el)
        }})
    return result.join('')
}
console.log(unique(a))
console.log(unique(b))
console.log(unique(c))
console.log(unique(d))