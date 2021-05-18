// var h = document.createElement('h1')
// var myValue = document.createTextNode("Hello World!")
// h.appendChild(myValue)

// document.querySelector('h1').appendChild(h)

var ul = document.getElementById('list')
var li

var addTodo = document.getElementById('add')
addTodo.addEventListener('click', addItem)

var removeTodo = document.getElementById('remove')
removeTodo.addEventListener('click', removeItem)

var removeAllTodo = document.getElementById('removeall')
removeAllTodo.addEventListener('click', removeAllItem)


function addItem() {
    var input = document.getElementById('input')
    var item = input.value
    ul = document.getElementById('list')
    var textNode = document.createTextNode(item)

    if(item === '') {
        // return false
        var p = document.createElement('p')
        p.textContent = 'Please Add Your Todo'
        p.setAttribute('id', 'para')
        ul.insertBefore(p, ul.childNodes[0])

        setTimeout(() => {
            li.className = 'visual'
        }, 2)
       

    }else {
        //create list
        li = document.createElement('li')
        //create checkbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id', 'check')
        //create label
        var label = document.createElement('label')
        label.setAttribute('for', 'item') //optinal

        //add these elements on web page

        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textNode)
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0])
       
        setTimeout(() => {
            li.className = 'visual'
        }, 2)

        input.value = ''
        var rm = document.getElementById('para')
        rm.remove()

    }
}

function removeItem() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
       while(li[index] && li[index].children[0].checked) {
           ul.removeChild(li[index])
       }
    }
}

function removeAllItem() {
    li = ul.children
   for (let index = 0; index < li.length; index++) {
       const element = li[index];
       ul.removeChild(element)
   }
}