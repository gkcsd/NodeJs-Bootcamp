
// const sayHello = function(name) {
//     return "Hello, there " + name + " !"
// }

// console.log(sayHello("Sammy"))


const sayHello = (name) => `Hello, there ${name} ! how are you ?`
console.log(sayHello("Sammy"))


const todos = [{
    title: "Go to gym",
    isDone: true
}, {
    title: "Buy a Milk",
    isDone: false
}, {
    title: "Go to work",
    isDone: true
}]

const thingsDone = todos.filter((todo) => todo.isDone === true)
console.log(thingsDone)

console.log()

const thingsDoneTwo = todos.filter((todo) => {
    if(todo.isDone === true) {
        console.log(todo.title)
    }
})