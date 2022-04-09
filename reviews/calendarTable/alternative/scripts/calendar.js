function createCalendar(elem, year, month) {
    let firstDayOfMonth = new Date(year, month, 1)
    let firstweekDay = firstDayOfMonth.getDay() - 1
    let numberOfDays = (function () {
        let last = new Date(year, month + 1, 1) 
        last.setDate(0)
        return last.getDate()
    })()

    let table = document.createElement('table')
    elem.appendChild(table)

    // creating first row with day names
    let dayRow = document.createElement('tr')
    let week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
    for (let j = 0; j < 7; j++) {
        let cell = document.createElement('th')
        let cellText = document.createTextNode(week[j])
        cell.appendChild(cellText)
        dayRow.appendChild(cell)
    }
    table.appendChild(dayRow)

    // creating whole table
    let dayCounter = 1
    for (let i = 0; i < 5; i++) {
        let row = document.createElement('tr')
        for (let j = 0; j < 7; j++) {
            let cell = document.createElement('td')
            let cellText
            // inserting days
            if (i === 0 && j === firstweekDay) {
                cellText = document.createTextNode(dayCounter)
                dayCounter++
            } else if (dayCounter <= numberOfDays && dayCounter > 1) {
                cellText = document.createTextNode(dayCounter)
                dayCounter++
            } else {
                cellText = document.createTextNode('')
            }

            cell.appendChild(cellText)
            row.appendChild(cell)
        }
        table.appendChild(row)
    }

    console.log(table)
}

createCalendar(calendar, 2022, 2);
