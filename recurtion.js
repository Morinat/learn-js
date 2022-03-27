function sumToSimple(number) {
    let sum = 0
    for (let i = number; i > 0; i--) {
        sum += i
    }
    return sum
}
console.log(sumToSimple(9))

function sumToRecurtion (number) {
    if (number > 0) {
        //console.log(number)
        return number + sumToRecurtion(number - 1)
    } else {
        return number
    }
    
}
console.log(sumToRecurtion(100))

function factorial (n) {
    if (n > 1) return n * factorial(n - 1)
    return n
}
console.log(factorial(5))

function fib(n) {
    const arr = []
    arr[0] = 0
    arr[1] = 1
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[n]
}
console.log(fib(77))