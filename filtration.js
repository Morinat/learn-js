function filterRange (arr, a, b) {
    let filtered = []
    arr.forEach(element => {
        if (element >= a && element <= b)
        filtered.push(element)
    })
    // return [arr, filtered]
    return {arr, filtered}
}

console.log(filterRange([3, 6, 87, 45, 2], 3, 50))