let dictionary = Object.create(null,
    {toString: { value() { return Object.keys(this).join(',')} }
})

dictionary.apple = "Apple"
dictionary.__proto__ = "test"

for (key in dictionary) {
    console.log(key)
}

console.log('this is dic:' + dictionary)