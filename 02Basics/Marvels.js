
const superHeroes = ['Spiderman', 'Iron-Man', 'Capt. America', 'Thor']

console.log(superHeroes)
console.log(superHeroes[0])
console.log(superHeroes[1])
console.log(superHeroes[superHeroes.length - 1])
console.log()
console.log(`We have ${superHeroes.length} super heroes`)


console.log()
//Three must know methods for array in javascript

const numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']

// numbers[1] = 'SOMETHING'

// console.log(numbers)

console.log()
//Start 
// console.log(numbers.shift())
// console.log(numbers)
console.log()

console.log(numbers.unshift('SOMETHING'))
console.log(numbers)

console.log()
//End
console.log('Numbers is to be deleted is: ' + numbers.pop())
console.log(numbers)
console.log()

numbers.push('Seven')
console.log(numbers)
console.log()

//Middle
numbers.splice(2, 2, "SOMETHINGMORE")
console.log(numbers)