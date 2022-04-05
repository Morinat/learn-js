function isInteger (num) {
    if ((num ^ 0) === num) return true
    return false
    //return (num ^ 0) === num
}

console.log( isInteger(1) ) // true
console.log( isInteger(1.6) ) // false
console.log( isInteger(-0.5) ) // false
console.log( isInteger(-5) ) // true