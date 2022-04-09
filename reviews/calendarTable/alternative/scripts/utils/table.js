import { getMonthNumberOfDays } from './date.js'

const createDayNamesCalendarRow = () => {
    let dayRow = document.createElement('tr');
    ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].forEach(weekDayName => {
        let cell = document.createElement('th')
        let cellText = document.createTextNode(weekDayName)
        cell.appendChild(cellText)
        dayRow.appendChild(cell)
    })
    return dayRow
}

const createPrimaryCalendarRow = (dayCounter, rowIndex, firstWeekDay, numberOfDays) => {
    let row = document.createElement('tr')
    if (dayCounter > numberOfDays) {
        return { row, dayCounter }
    }
    for (let j = 0; j < 7; j++) {
        let cell = document.createElement('td')
        let cellText
        // inserting days
        if (rowIndex === 0 && j === firstWeekDay) {
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
    return { row, dayCounter }
}

const createPrimaryCalendarRows = (firstWeekDay, numberOfDays) => {
    let dayCounter = 1
    let row
    const rows = []
    const numOfWeeks = 6
    for (let i = 0; i < numOfWeeks; i++) {
        ({ row, dayCounter } = createPrimaryCalendarRow(
            dayCounter, i, firstWeekDay, numberOfDays
        ))
        rows.push(row)
    }
    return rows
}

export const createCalendarTable = (elem, year, month) => {
    let firstDayOfMonth = new Date(year, month, 1)
    let firstWeekDay = firstDayOfMonth.getDay() - 1
    let numberOfDays = getMonthNumberOfDays(year, month)

    let table = document.createElement('table')
    elem.appendChild(table)
    table.appendChild(createDayNamesCalendarRow())
    createPrimaryCalendarRows(firstWeekDay, numberOfDays).forEach(row => table.appendChild(row))
}

export default createCalendarTable
