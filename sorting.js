let arr = [3, 5, 9, 2, 0, 5, 7, 1, 8]

function compare (a, b) {
    if (a === b) return 0
    if (a < b) return 1
    if (a > b) return -1
}

console.log(arr.sort(compare))