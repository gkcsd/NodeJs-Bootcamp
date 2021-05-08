const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Frid', 'Sat']

days.forEach(function(day,index) {
    console.log(`Day starts with ${index+1} ---- ${day}`)
})

console.log()
////////////////////////////////
//for loop


for(let i = 0; i < days.length; i++) {
    console.log(days[i])
}


console.log()
//////////////////Simple todo application

let todos = []

todos.push('Gym')
todos.push('Work')
todos.push('Coding')

todos.forEach(function(todo, index){
    console.log(`Your task no. ${index} is ${todo}`)
})


console.log()
//////////////todo applicatioin using for loop and push


let myTodos = []

myTodos.unshift('Dinner')
myTodos.unshift('Study')
myTodos.unshift('Exercise')

for(let i = 0; i < myTodos.length; i++) {
    console.log(`Your task no. ${i} is ${myTodos[i]}`)
}