export const getMonthNumberOfDays = (year, month) => {
    let last = new Date(year, month + 1, 1)
    last.setDate(0)
    return last.getDate()
}

