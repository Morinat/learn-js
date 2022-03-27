function createBug () {
    console.log('creating', this)
    let currentX = 0
    let currentY = 0

    // function newBug () {
    //     return newBug
    // }
    const newBug = {}

    newBug.report = function () {
        console.log(currentX, currentY)
        return newBug
    }
    
    newBug.goLeft = function (a) {
        currentX -= a
        return newBug
    }
    newBug.goRight = function (a) {
        currentX += a
        return newBug
    }
    newBug.goUp = function (a) {
        currentY -= a
        return newBug
    }
    newBug.goDown = function (a) {
        currentY += a
        return newBug
    }
    // bug.report = function () {
    //     return {currentX, currentY}
    // }
    return newBug
}

let myBug = createBug()

myBug.goDown(2).report().goRight(9).goUp(6).report()
// myBug().letLeft(8)
// console.log(myBug())
// myBug().letLeft(2)
// myBug().letUp(4)
// console.log(myBug())

let secondBug = new createBug()