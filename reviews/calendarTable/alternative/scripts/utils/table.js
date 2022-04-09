import { getMonthNumberOfDays } from './date.js'

const createDayNamesCalendarRow = () => {
    let dayRow = document.createElement('tr')
    let week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
    for (let j = 0; j < 7; j++) {
        let cell = document.createElement('th')
        let cellText = document.createTextNode(week[j])
        cell.appendChild(cellText)
        dayRow.appendChild(cell)
    }
    return dayRow
}

const createPrimaryCalendarRows = (firstWeekDay, numberOfDays) => {
    let dayCounter = 1
    const rows = []
    for (let i = 0; i < 5; i++) {
        let row = document.createElement('tr')
        for (let j = 0; j < 7; j++) {
            let cell = document.createElement('td')
            let cellText
            // inserting days
            if (i === 0 && j === firstWeekDay) {
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
        rows.push(row)
    }
    return rows
}

export function createCalendarTable (elem, year, month) {
    let firstDayOfMonth = new Date(year, month, 1)
    let firstWeekDay = firstDayOfMonth.getDay() - 1
    let numberOfDays = getMonthNumberOfDays(year, month)

    let table = document.createElement('table')
    elem.appendChild(table)
    table.appendChild(createDayNamesCalendarRow())
    createPrimaryCalendarRows(firstWeekDay, numberOfDays).forEach(row => table.appendChild(row))
}

export default createCalendarTable
