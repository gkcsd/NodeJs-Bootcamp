let myYoutubeVideos = {
    title: 'Loops in javascript',
    lengthOfVideo: 15,
    authorName: 'Ganesh Kale',
    videoDescription: 'This video is about different loops in javascript'
}

console.log(myYoutubeVideos)
console.log(`Todays teaching agenda is ${myYoutubeVideos.title} and its by ${myYoutubeVideos.authorName} `)

console.log()
//////////////////////////
//change is object

myYoutubeVideos.title = 'forEach loop in javascipt'

console.log(myYoutubeVideos)
console.log(`Todays teaching agenda is ${myYoutubeVideos.title} and its by ${myYoutubeVideos.authorName} `)


console.log()
///////////////////////////
//Objects in function

let myYoutubeVideosTwo = {
    title: 'Loops in javascript',
    lengthOfVideo: 15,
    authorName: 'Ganesh Kale',
    videoDescription: 'This video is about different loops in javascript'
}

let changeVideoLength = function(myObject){
    console.log(`My YouTube video length is ${myObject.lengthOfVideo}`)
}

changeVideoLength(myYoutubeVideosTwo)

console.log()
/////using return keyword this one use more functionality

let changeVideoLengthTwo = function(myObject){
    return `My YouTube video length is ${myObject.lengthOfVideo + 2}`
}

console.log(changeVideoLengthTwo(myYoutubeVideosTwo))
