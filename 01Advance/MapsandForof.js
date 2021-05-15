var john = {
    name: 'I am John',
    age: 24,
    isActive: true
}

var marry = {
    name: 'I am Marry',
    age: 22,
    isActive: true
}

var sam = {
    name: 'I am Sam',
    age: 21,
    isActive: false
}

let users = new Map()

users.set('john', john)
users.set('marry', marry)
users.set('sam', sam)

console.log(users)