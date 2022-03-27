function sum (a) {
    return function (b) {
        return a + b
    }
}
console.log(sum(2)(3))

let arr = [1, 2, 3, 4, 5, 6, 7]

 function inBetween (a, b) {
    return function(x) {
        return x >= a && x <= b
    }
 }
 console.log( arr.filter(inBetween(3, 6)) ) // 3,4,5,6

arr = [1, 2, 3, 4, 5, 6, 7]

function inArray ([...args]) {
    return function (x) {
        for (let num of args) {
            if(x === num) return x
        }
    }
}
console.log( arr.filter(inArray([1, 2, 10])) ) // 1,2

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
]

function byField (str) {   
    return function (a, b) {
        return a[str] > b[str] ? 1 : -1
    }
}
console.log(users.sort(byField('name')))

function makeArmy() {

    let shooters = [];
  
    for(let i = 0; i < 10; i++) {
      let shooter = function() { 
        console.log( i ); // должна выводить порядковый номер
      };
      shooters.push(shooter);
    }
  
    return shooters;
  }
  
  let army = makeArmy();
  
  army[0](); // 0
  army[5](); // 5