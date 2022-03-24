let user = {
    name: "John",
    years: 30
}

let {name, years: age, isAdmin = false} = user

console.log(name)
console.log(age)
console.log(isAdmin)

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
}

function topSalary(obj) {
    let max = 0
    let maxName = null
    for (let [name, salary] of Object.entries(obj)) {
        if (salary > max) {
            max = salary
            maxName = name
        }
    }   
    return maxName
}

console.log(topSalary(salaries))