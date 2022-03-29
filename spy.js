// // let f = x => x
// // f = x => -x
// // f = 6
// f = x => 6 + x

// let g = (x) => {
//     return x
// }

// const logAndCall = (f, a) => {
//     console.log('I am calling ', f, 'with', a)
//     return f(a)
// }

// g1 = (x) => {
//     console.log('I am calling ', g, 'with', x)
//     return g(x)
// }

// const addLogging = (f) => {
//     return (x) => {
//         console.log('I am calling ', f, 'with', x)
//         return f(x)
//     }
// }

// g = addLogging(g)
// const f2 = addLogging((x) => 2 * x)

// // console.log(g(5), logAndCall(g, 5))
// console.log(f2(5))

function generate () {
    const someObject
    someObject.calls = []
    someObject.do = function () {
        // bla-bla
        someObject.calls.push(arguments)
    }
    return someObject
}

const myObj = generate()
myObj.do()
// myObj()


function spy (func) {
    const calls = new Map()
    const decoratedFunction = function (...arguments) {
        let result = func.call(this, ...arguments)
        let key = hash(arguments)
        calls.set(key, result)
        console.log('size:' + calls.size)
        console.log('keys:' + [...calls.keys()])
        return result
    }
    decoratedFunction.calls = calls
    return decoratedFunction
}

function hash (args) {
    return args[0] + ',' + args[1]
}

function work (a, b) {
    return a + b
}
  
work = spy(work)
  
console.log(work(1, 2))
console.log(work(4, 5))
  
for (let args of work.calls) {
    console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}