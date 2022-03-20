let arr = ['Anya', 'Tanya', 'Vanya', 'Grinya']
let sorted = copySorted(arr)

function copySorted (arr) {
    let newArr = arr.slice()
    return newArr.sort()
}

console.log(arr)
console.log(sorted)