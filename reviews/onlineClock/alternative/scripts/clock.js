let clockOn = false

const zeropad = number => '' +
    (number < 10 ? '0' : '') +
    number

const renderCurrentTime = () => {
    const now = new Date()
    const hh = zeropad(now.getHours())
    const mm = zeropad(now.getMinutes())
    const ss = zeropad(now.getSeconds())
    const clock = this.document.getElementById('clock')
    clock.innerText = `${hh}:${mm}:${ss}`
}

function clockStart () {
    clockOn = true
    this.document.getElementById('indicator').classList.add('active')
}

function clockStop () {
    clockOn = false
    this.document.getElementById('indicator').classList.remove('active')
}

renderCurrentTime()
setInterval(() => clockOn && renderCurrentTime(), 500)
