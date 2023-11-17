const users = [
    { name: "Maxim", id: "uuid1", online: true },
    { name: "Andrew", id: "uuid2", online: false },
    { name: "Alex", id: "uuid3", online: true },
    { name: "Peter", id: "uuid4", online: false }
];

const contacts = [
    { id: "uuid1", email: "maxim@ya.ru" },
    { id: "uuid2", email: "andrew@ya.ru" },
    { id: "uuid4", email: "alex@ya.ru" }
];

const result = users.filter((el) => {
    if(el.online === true) {
        return el
    }
})
result.forEach((el)=> {
    contacts.map(element => {
        if(el.id === element.id) {
            el.email = element.email
        }
        else if (!el.email){
            el.email = null
        }
    })
})
console.log(result)