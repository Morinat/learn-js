function Calculator() {

    const self = {}

    self.methods = {}
    self.methods['+'] = (a, b) => a + b
    self.methods['-'] = (a, b) => a - b

    self.calculate = function (str) {
        let arr = str.split(' ')
        let a = +arr[0]
        let b = +arr[2]
        let operator = arr[1]
        return self.methods[operator](a, b)
    }

    self.addMethod = function (name, func) {
        self.methods[name] = func
    }

    return self
}


// function Calculator() {

//     this.methods = {
//         '+': (a, b) => a + b,
//         '-': (a, b) => a - b,
//     }

//     this.calculate = function (str) {
//         let arr = str.split(' ')
//         let a = +arr[0]
//         let b = +arr[2]
//         let operator = arr[1]
//     }

//     this.addMethod = function (name, func) {

//     }

//     return this
// }

// let calc = new Calculator()
let calc = Calculator()
console.log(calc.calculate('3 - 7'))