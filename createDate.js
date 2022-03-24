let date = new Date(2012, 1, 20, 3, 12)
// date.setFullYear(2022, 1, 20)
// date.setHours(3, 12)

console.log(date)

let date1 = new Date(2012, 0, 3)
// function getWeekDay (d) {
//     let day = d.getDay()
//     switch (day) {
//         case 0: return 'ВС'
//         case 1: return 'ПН'
//         case 2: return 'ВТ'
//         case 3: return 'СР'
//         case 4: return 'ЧТ'
//         case 5: return 'ПТ'
//         case 6: return 'СБ'
//     }
// }

function getWeekDay(d) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return days[d.getDay()];
}

function getLocalDay (d) {
    let days = [7, 1, 2, 3, 4, 5, 6]
    return days[d.getDay()]
}

function getDateAgo(oldDate, days) {
    const newDate = new Date(oldDate)
    newDate.setDate(newDate.getDate() - days)
    return newDate
}

function getLastDayOfMonth (year, month) {
    let date = new Date(year, month, 28)
    for (let i = -1; date.getMonth() == month; i++) {
        date.setDate(date.getDate() + i)
    }
    return date
}

function getSecondsToday () {
    let now = new Date()
    return (now.getHours() * 3600) + (now.getMinutes() * 60) + now.getSeconds()
}

function getSecondsToTomorrow () {
    const now = new Date()
    const secondsInDay = 86400
    const secondsElapsed = (now.getHours() * 3600) + (now.getMinutes() * 60) + now.getSeconds()
    return secondsInDay - secondsElapsed
}

let date2 = new Date(2021, 02, 24, 19, 52)

function formatDate (d) {
    let now = new Date()
    let diffInMilliseconds = now.getTime() - d.getTime()

    if (diffInMilliseconds < 1000) {
        return console.log("прямо сейчас")
    } else if (diffInMilliseconds < 60 * 1000) {
        return console.log(`${Math.round(diffInMilliseconds / 1000)} секунд назад`)
    } else if (diffInMilliseconds < 3600 * 1000) {
        return console.log(`${Math.round(diffInMilliseconds / (1000 * 60))} минут назад`)
    } else {
        return console.log(`${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`)
    }
}

console.log(getSecondsToTomorrow())
console.log(getSecondsToday())
console.log(getLocalDay(date1))
console.log(getWeekDay(date1))
console.log(getDateAgo(date1, 4))
console.log(date1)
console.log(getLastDayOfMonth(2020, 1))
console.log(formatDate(date2))