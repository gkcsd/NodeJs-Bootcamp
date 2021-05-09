let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0
}

let addMeetings = function(todo, meet = 0) {
    todo.meetings = todo.meetings + meet;
}

let meetDone = function(todo, meet = 0) {
    todo.meetDone = todo.meetDone + meet;
}

let resetDay = function(todo) {
    todo.meetings = 0
    todo.meetDone = 0
}

let getSummaryOfDays = function(todo) {
    let meetLeft = todo.meetings - todo.meetDone;
    return `You have ${meetLeft} meetings left today!`
}

addMeetings(myTodos, 4)
addMeetings(myTodos,2)

meetDone(myTodos, 5)

console.log(getSummaryOfDays(myTodos))