
let iAmGlobal = 'someValue'

if (true) {
    let iAmLocal = 'someMoreValue' // This var causes variable leak problem so we need to declare variable as a let
    iAmGlobal = 'Superman'
    console.log(iAmGlobal)
    console.log(iAmLocal)
}
// console.log(iAmLocal)
console.log(iAmGlobal)

console.log()
/////////////////////////////////

//Kings problem

let king = 'John'

if (true) {
    // let king = 'Sam'

    if (true) {
        let king = 'Ram'
        console.log(king)
    }
}

if (true) {
    console.log("This is second part: " + king)
}







