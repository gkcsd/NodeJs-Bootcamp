let userEmail = 'abcd'
let userPassword = '1234'

let userChecker = function(myString) {
    if((myString.includes(1234)) && (myString.length > 6)){
        return true
    }
    return false
}
console.log(userChecker(userEmail))

console.log()

let passChecker = function(pass) {
    if((pass.includes(1234789)) && (pass.length > 8)){
        return true
    }
    return false
}

console.log(passChecker(userPassword))
