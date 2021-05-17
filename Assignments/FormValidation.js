document.querySelector('.myform').addEventListener('submit', (event) => {
    event.preventDefault()

    let un = event.target.username.value
    let ue = event.target.email.value

    let p = document.querySelector('#paraone')
    p.textContent = un
    let p2 = document.querySelector('#paratwo')
    p2.textContent = ue

    let para = document.createElement('p')

    let pass1 = document.getElementById('pass1').value
    let pass2 = document.getElementById('pass2').value


    if(pass1 === pass2) {
        console.log("Password Matched")
    } else {
        para.textContent = "Password Not Matched"
        document.querySelector('form').appendChild(para)
    }
})