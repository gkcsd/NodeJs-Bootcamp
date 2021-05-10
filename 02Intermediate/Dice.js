let num1 = 22
let num2 = 7

let result = num1/num2

console.log(result.toFixed(2))

let floatRes = result.toFixed(2)

console.log(Math.floor(floatRes))
console.log(Math.ceil(floatRes))

console.log()

console.log(Math.random() * 10)


console.log()
////////////////////////////////////////

let upper = 25
let lower = 20

let resultTwo = Math.floor(Math.random() * (upper - lower + 1)) + lower

console.log(resultTwo)