interface IObject {
    id: number
}

function sortingObject<T extends IObject[]>(object: T): T{
    if(object.length) {
        return object.sort((a, b) => a.id - b.id)
    } else {
        return object
    }

}
const data = [
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Надя' },
];

console.log(sortingObject(data))