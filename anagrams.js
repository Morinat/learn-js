let array = ["nap", "nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]

function aclean(arr) {
    let map = new Map()
  
    for (let word of arr) {
      let sorted = word.toLowerCase().split("").sort().join("")
      map.set(sorted, word)
      console.log(map.entries())

    }

    // console.log(map.entries())

    return Array.from(map.values())
}

console.log(aclean(array))