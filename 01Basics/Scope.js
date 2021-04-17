
let iAmGlobal = 'someValue'

if (true) {
    let iAmLocal = 'someMoreValue' // This var causes variable leak problem so we need to declare variable as a let
    iAmGlobal = 'Superman'
    console.log(iAmGlobal)
    console.log(iAmLocal)
}
// console.log(iAmLocal)
console.log(iAmGlobal)