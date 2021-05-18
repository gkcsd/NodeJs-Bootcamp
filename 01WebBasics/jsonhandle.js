const student = {
    name: 'John',
    age: 24,
    isActive: true
}

//convert this object into string to be stored in a local storage

const studentObjectToString = JSON.stringify(student)

// localStorage.setItem('student', studentObjectToString)

//convert this string into JSON object 

const toJSONString = JSON.parse(studentObjectToString)
console.log(toJSONString.age);
console.log(toJSONString.name)