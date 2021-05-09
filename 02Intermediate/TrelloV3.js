let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeetings: function(num){
        //console.log('Heyyy, i am a function')
        this.meetings = this.meetings + num
    },

    summary: function(){
        return `There are ${this.meetings} meetings left today`
    }
}

myTodos.addMeetings(4)
console.log(myTodos.summary())









// let myTodosTwo = {
//     day: 'TuesDay',
//     meetings: 10,
//     meetDone: 5,

//     addMeetings: function(){
//         //console.log('Heyyy, i am a function')
//         console.log(this)
//     }
// }

// myTodosTwo.addMeetings()