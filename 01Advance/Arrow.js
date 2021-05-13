// const sayHello = function(name) {
//     return 'Heyy, There, This is ' + name + " !"
// }

// console.log(sayHello("Ganesh"))

const sayHello = name =>  `Heyy, There, This is ${name}`

// console.log(sayHello("Ganesh"))


const todos = [{
    title: 'Go To Gym',
    isDone: true,
}, {
    title: 'Buying Bread',
    isDone: true,
}, {
    title: 'Shooting YouTube Video',
    isDone: false,
}]

const thingsDone = todos.filter((todo) => {
    return todo.isDone === true
})

console.log(thingsDone)