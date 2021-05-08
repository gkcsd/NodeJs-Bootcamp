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