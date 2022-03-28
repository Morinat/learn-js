function printNumbers (from, to) {
    let i = from
  
    let timerId = setInterval(function() {
      console.log(i)
      if (i === to) {
        clearInterval(timerId)
      }
      i++
    }, 1000)
  }

//printNumbers(2, 5)

function printNumTimeout (from, to) {
    let i = from
    let timer = setTimeout(function request () {
        console.log(i)
        if (i === to) return clearTimeout(timer)
        i++
        timer = setTimeout(request, 1000)
    }, 1000)
}

printNumTimeout(8, 13)