const myTodos = ['Go To Gym', 'Study', 'Buying Bread']

// console.log(myTodos[myTodos.indexOf('Go To Gym')])


const newTodos = [{
    title: 'Go To Gym',
    isDone: true,
}, {
    title: 'Study',
    isDone: true,
}, {
    title: 'Buying Bread',
    isDone: false,
}]

// const index = newTodos.findIndex(function(todo, index) {
//     console.log(todo)
//     return todo.title === 'Buying Bread'
// })

// console.log(index)

// Method- 1
// const findTodos = function(myTodos, title) {
//     const index = myTodos.findIndex(function(todo, index) {
//         return todo.title.toLowerCase() === title.toLowerCase()
//     })
//     return myTodos[index]
// }

// let sol = findTodos(newTodos, 'buying Bread')
// console.log(sol)

//Method-2

const findTodos = function(myTodos, title) {
    const find = myTodos.find(function(todo, index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return find
}
let printMe = findTodos(newTodos, 'Go to gym')
console.log(printMe)