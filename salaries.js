let salaries = {
    // "John": 100,
    // "Pete": 300,
    // "Mary": 250
}

function sumSalaries (obj) {
    let arr = Object.values(obj)
    let sum = 0
    for (item of arr) {
        sum += +item
    }
    return sum
}
  
  console.log(sumSalaries(salaries))