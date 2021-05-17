function myValidation() {
    let myValue = document.getElementById('myform').value
    let para = document.querySelector('#idone')

    if(isNaN(myValue) || myValue < 1 || myValue > 20) {
        para.textContent = "Invalid input"
    } else {
        para.textContent = myValue
    }
}



//Form validation..

document.querySelector('.myform').addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event.target.username.value)
    console.log(event.target.realname.value)
    event.target.username.value = ''
    event.target.realname.value = ''
})