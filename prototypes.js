let head = {
    glasses: 1
};

let table = {
    pen: 3,
    _proto_: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    _proto_: table
};

let pockets = {
    money: 2000,
    _proto_: bed
};

function f () {
    console.log("Hello!");
}

Function.prototype.deferSet = function (ms)  {
    return setTimeout(this, ms)
}
  
f.deferSet(1000); // выведет "Hello!" через 1 секунду

function func (a, b) {
    return console.log(a + b)
}

Function.prototype.defer = function (ms) {
    let func = this
    return function (...arguments) {
        setTimeout(() => func.apply(this, arguments), ms)
    }
}

func.defer(3000)(1, 3)