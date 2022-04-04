let user = {
    name: "John"
}
  
function wrap(target) {
    return new Proxy(target, {
        get(target, prop, receiver) {
            if(prop in target) {
                return Reflect.get(target, prop, receiver)
            } else {
                let err = new Error('Ошибка: такого свойства не существует')
                return err
            }
        }
    })
}
  
user = wrap(user)
  
console.log(user.name) // John
//console.log(user.age) // Ошибка: такого свойства не существует

let array = [1, 2, 3]

array = new Proxy(array, {
    get(target, index) {
        if (index >= 0) {
            return target[index]
        } else {
            return target[target.length + +index]
        }
    }
})

console.log( array[1] ) // 2
console.log( array[-1] ) // 3
console.log( array[-2] ) // 2

let handlers = Symbol('handlers');

function makeObservable(target) {
  // 1. Создадим хранилище обработчиков
  target[handlers] = [];

  // положим туда функции-обработчики для вызовов в будущем
  target.observe = function(handler) {
    this[handlers].push(handler);
  };

  // 2. Создадим прокси для реакции на изменения
  return new Proxy(target, {
    set(target, property, value, receiver) {
      let success = Reflect.set(...arguments); // перенаправим операцию к оригинальному объекту
      if (success) { // если не произошло ошибки при записи свойства
        // вызовем обработчики
        target[handlers].forEach(handler => handler(property, value));
      }
      return success;
    }
  });
}

function makeObservable (target) {
    let handlers = []
    target.observe = function (handler) {
        handlers.push(handler)
    }

    return new Proxy(target, {
        set(target, property, value, receiver) {
            let success = Reflect.set(...arguments)
            if (success) {
                handlers.forEach(handler => handler(property, value))
            }
            return success
        }
    })
}

let newUser = {}
let secondUser = {}

newUser = makeObservable(newUser)
secondUser = makeObservable(secondUser)

newUser.observe((key, value) => {
  console.log(`SET ${key}=${value}`)
})


newUser.name = "Pete"
secondUser.name = 'Puma' // ? 