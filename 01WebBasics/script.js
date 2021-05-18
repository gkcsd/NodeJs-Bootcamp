// console.log(document.getElementById('idone'))
// console.log(document.getElementsByClassName('classone'))

// const myElement = document.querySelectorAll('#idone')
// console.log(myElement[0])

// const myPElement = document.querySelector('p')
// myPElement.textContent = 'I am being changed by JS'

const myPElement = document.querySelectorAll('p')
myPElement.forEach((p) => {
    p.textContent = 'I am changed using loop in JS'
})

const myNewPara = document.createElement('p')
myNewPara.textContent = 'I was added via JS'

document.querySelector('body').appendChild(myNewPara)

document.querySelector('button').addEventListener('click', (event) => {
    event.target.textContent = 'I was Clicked'
})

//input form validation
document.querySelector('#myform').addEventListener('input', (event) => {
    console.log(event.target.value);
})


