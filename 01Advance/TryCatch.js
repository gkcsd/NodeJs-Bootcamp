const convertToRs = (dollar) => {
    if(typeof dollar === 'number') {
        return dollar*64
    }else {
        throw Error("Please provide the numbers only")
    }
}

try {
    const myValue = convertToRs('Five')
    console.log(myValue)
} catch (err) {
    console.log(err)
}

console.log('I will not run if my program freezes')