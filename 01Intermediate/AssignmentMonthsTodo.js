const months = ['Jan', 'Feb', 'March', 'April', 'May', 'Jun','Jul','Aug','Sep', 'Oct', 'Nov', 'Dec']

months.forEach(function(month) {
    console.log(month)
})

console.log()
///////////////////////////////////

const todos = ['Exercise', 'Study', 'CP', 'Office Work', 'Rest', 'Dinner', 'WORK', 'CP']

todos.forEach(function(todo, index){
    console.log(`Todo -${index+1} -- ${todo}`)
})