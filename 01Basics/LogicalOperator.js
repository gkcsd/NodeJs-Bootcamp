// && operator - bothe the conditions must be true
// || operator - one of the condition must be true

let isVerified = false
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if (isLoggedIn && !isVerified && hasPaymentToken) {
    console.log("Greeting message for user")
    console.log("Grant access for paid courses")
} else if (isVerified || isGuest) {
    console.log("Allow access for free preview of courses")
} else {
    console.log("Message: Please contact to Admin")
}