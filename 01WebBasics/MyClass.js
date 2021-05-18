class User {
    constructor(firstName, middleName, lastName, credit) {
        this.firstName = firstName
        this.middleName = middleName
        this.lastName = lastName
        this.credit = credit
    }

    getFullName() {
        let fullName = `${this.firstName} ${this.middleName} ${this.lastName} is my full name`
        return fullName
    }

    editName(newName) {
        const myName = newName.split(' ')
        this.firstName = myName[0]
        this.lastName = myName[1]
    }

    addMiddleName(newMiddleName) {
        const myMidName = newMiddleName.split(' ')
        this.firstName = myMidName[0]
        this.middleName = myMidName[1]
        this.lastName = myMidName[2]
    }
}

const john = new User('John', 'Raj', 'Anderson', 34)
console.log(john)

console.log(john.getFullName())

console.log()

john.editName("Johnyy MAAA")
console.log(john.getFullName())

console.log()

john.addMiddleName("Ganesh Vijay Kale")
console.log(john.getFullName())

// const sammy = new User('Samy', 'Jackson', 45)
// console.log(sammy)