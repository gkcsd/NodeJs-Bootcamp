
if (false) {
    console.log("I am inside the if block")
    console.log("I am still inside the if block")
} else if(true) {
    console.log("I am inside the else if block")
} else {
    console.log("Notice this block")
}

/////////////////////////////////

var whoIsHere = 'user'

if (whoIsHere === 'user') {
    console.log("Greeting message for user")
    console.log("Allow access to view all courses")
} else if (whoIsHere == 'teacher') {
    console.log("Greeting message for teacher")
    console.log("Allow access to his courses")
} else {
    console.log("MESSAGE: Please verify your email")
    console.log("Send user an email for verification")
}