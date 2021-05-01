let sayHello = function(name) {
    console.log(`Greeting message for ${name}`)
    console.log(`Hey ${name}`)
}
sayHello('John')

console.log()
/////////////////////////////////////////

let fullNameMaker = function(firstName, lastName) {
    console.log("Welcome To CodeBucket");
    console.log(`Happy to have you ${firstName} ${lastName}`)
}
fullNameMaker('Ganesh', 'Kale')

console.log()
//////////////////////////////////////////

let myAdder = function(num1, num2) {
    let totalAddition = num1 + num2
    return totalAddition
}
console.log(myAdder(5,15))

console.log()
/////////////////////////////////////////

let myMultiplier = function(num1, num2) {
    let totalMul = num1 * num2
    return totalMul
}
console.log(myMultiplier(5,5))

console.log()
/////////////////////////////////////////

let guestUser = function(name = 'Unknown', courseCount = 0) {
    return 'Hello ' + name + ' and Your course count is ' + courseCount
}
console.log(guestUser())