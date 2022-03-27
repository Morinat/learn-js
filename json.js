let user = {
    name: "Василий Иванович",
    age: 35
  }

let json = JSON.stringify(user)
console.log(json)

let antiJSON = JSON.parse(json)
console.log(antiJSON)

let room = {
    number: 23
}
  
let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
}
  
  // цикличные ссылки
  room.occupiedBy = meetup
  meetup.self = meetup
  console.log(meetup)
  
  console.log(JSON.stringify(meetup, function replacer(key, value) {
    return (key != '' && value == meetup) ? undefined : value
  }, 3))
  
  /* в результате должно быть:
  {
    "title":"Совещание",
    "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
    "place":{"number":23}
  }
  */