const arr = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
];

function grouping <T, R extends keyof T >(arr: T[], key: R ): Record<string, T[]> {
    let result: Record<string, T[]> = {}
    if(arr.length) {
        arr.forEach((el) => {
            const strValue = String(el[key])
            if(strValue in result) {
                result[strValue].push(el)
            } else {
                result[strValue] = [el]
            }
        })
    }

    return result

}

console.log(grouping(arr, 'group'))

