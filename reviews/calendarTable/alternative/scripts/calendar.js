import createCalendarTable from './utils/table.js'

let month = 1
let year = 2022
document.getElementById('year').innerText = year;

const monthNames= [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
];

[...document.getElementById('calendars').getElementsByClassName('month')].forEach(cn => {
    cn.getElementsByClassName('name')[0].innerText = monthNames[month - 1]
    createCalendarTable(cn.getElementsByClassName('calendar')[0], year, month++)
})
