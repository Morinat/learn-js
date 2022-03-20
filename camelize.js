// function camelize (str) {
//     let arr = str.split('-')
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
//     }
//     let newArr = arr.join('')
//     return newArr
// }

// function camelize (str) {
//     let arr = str.split('-')
//     let result = ''
//     arr.forEach(word => {
//         result += word[0].toUpperCase() + word.slice(1) 
//     })
//     return result
// }

function camelize (str) {
    let arr = str.split('-')
    arr.forEach((word, i, arr) => {
        console.log(word, i, arr)
        arr[i] = word[0].toUpperCase() + word.slice(1) 
    })
    return arr.join('')
}

console.log(camelize('gggf-fss-s'))

// const res = 'gggf-fss-s'.split('-').map(
//     a => a[0].toUpperCase() + a.slice(1)
// ).join('')
// console.log(res)

// [1,2,3].forEach(element => {
//     console.log(element)
// });