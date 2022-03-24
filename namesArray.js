let vasya = { name: "Вася", surname: "Пупкин", id: 1, age: 25};
let petya = { name: "Петя", surname: "Иванов", id: 2, age: 30};
let masha = { name: "Маша", surname: "Петрова", id: 3, age: 29};

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name)
let usersMapped = users.map(item => ({fullName: item.name + ' ' + item.surname, id: item.id}))

function sortByAge (arr) {
    return arr.sort((a, b) => a.age - b.age)
}

function getAverageAge (arr) {
    let sum = 0
    for (user of arr) {
        sum += user.age
    }
    return sum / arr.length
}

console.log(names)
console.log(usersMapped)
sortByAge(users)
console.log(users[1].name)
console.log(getAverageAge(users))