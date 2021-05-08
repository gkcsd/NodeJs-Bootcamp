let getMyGrade = function(currentMarks, totalMarks) {
    let totalPercentage = (currentMarks/totalMarks) * 100

    let grade = ''

    if(totalPercentage >= 90) {
        grade = 'A'
    }else if(totalPercentage < 90 && totalPercentage >= 80){
        grade = 'B'
    }else if(totalPercentage < 80 && totalPercentage >= 70) {
        grade = 'C'
    }else if(totalPercentage < 70 && totalPercentage >= 60){
        grade = 'D'
    }else {
        grade = 'E'
    }

    return `The grade is ${grade} and the percentage is ${totalPercentage}%`
}

let result = getMyGrade(89, 100);

console.log(result)