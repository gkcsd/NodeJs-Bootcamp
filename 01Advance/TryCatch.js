const convertToRs = (dollar) => {
    if(typeof dollar === 'number') {
        return dollar*64
    }else {
        throw Error("Please provide the numbers only")
    }
}

const myValue = convertToRs('Five')
console.log(myValue)