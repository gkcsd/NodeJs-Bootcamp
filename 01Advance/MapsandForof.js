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

// console.log(users.size)

// console.log(users.get('john'))

// console.log(users.keys())
// console.log(users.values())

// for of loop in JS
// for(const key of users.keys()) {
//     console.log(key)
// }


// for(const [key, value] of users.entries()) {
//     // console.log(key + " = " + value.name)
//     return `${key} = ${value.name}`
// }

// users.forEach((value, key) => {
//     console.log(key + " = " + value.name)
// })

// let result = users.forEach((value, key) => {
//     return `${key} = ${value.name}`
// })


let arrofarr = [['one', '1'], ['two', '2'], ['three', '3']]

let userArrayOfArray = new Map(arrofarr)

// console.log(userArrayOfArray)


for(const [key, value] of userArrayOfArray.entries()) {
    console.log(key + " = " + value)
}

console.log()

userArrayOfArray.forEach((value, key) => {
    console.log(key + " = " + value)
})