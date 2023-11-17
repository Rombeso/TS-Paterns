class User {
    skills: string[] = []


    addSkills (skills: string[] | string): void {
        if (typeof skills === "string") {
            this.skills.push(skills)
        } else if (Array.isArray(skills)) {
            this.skills = [...this.skills, ...skills]
        }
    }
}

let user = new User()
let user2 = new User()
user.addSkills(['qwe', 'qwe'])
user2.addSkills('qwe2')

console.log(user)
console.log(user2)