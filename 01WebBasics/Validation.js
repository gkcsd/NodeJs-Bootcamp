function myValidation() {
    let myValue = document.getElementById('myform').value
    let para = document.querySelector('#idone')

    if(isNaN(myValue) || myValue < 1 || myValue > 20) {
        para.textContent = "Invalid input"
    } else {
        para.textContent = myValue
    }
}