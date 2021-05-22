function deposit(...money) {  // ... converted list into array
    let balance = 0
    for(let i = 0; i < money.length; i++) {
        balance += money[i];
    }
    return balance
}
console.log(deposit(100,40,50,30))

let addMoney = [34,66,99,24,36] //array
console.log(...addMoney) // ... converted array into list 

console.log(Math.max(...addMoney))