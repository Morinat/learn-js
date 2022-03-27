let myCounter = (function makeCounter() {
    let count = 0;

    function newCounter() {
        return count++;
    }

    // counter.set = value => { count = value; }
    newCounter.set = function (value) {
        count = value
        return count
    }

    newCounter.decrease = () => count--;

    return newCounter;
})()
  
//let myCounter = makeCounter();
  
console.log( myCounter() ); // 0
console.log( myCounter() ); // 1
myCounter.set(10); // установить новое значение счётчика
console.log( myCounter() ); // 10
myCounter.decrease(); // уменьшить значение счётчика на 1  
console.log( myCounter() ); // 10 (вместо 11)

function sum(a) {
    let currentSum = a;
    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function() {
        return currentSum;
    };
    return f
}

console.log('here: ' + sum(1)(2))
console.log(sum(1)(2)(3).toString())
console.log(sum(5)(-1)(2).toString())
console.log(sum(6)(-1)(-2)(-3).toString())
console.log(sum(0)(1)(2)(3)(4)(5).toString())

