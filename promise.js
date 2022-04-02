function delay (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
  
delay(3000).then(() => console.log('выполнилось через 3 секунды'))

async function loadJson(url) {
    let response = await fetch(url)
    if (response.status === 200) {
        let json = await response.json()
    return json
    } else {
    throw new Error(response.status)
    }
}
  
//loadJson('no-such-user.json').catch(console.log) // Error: 404


class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
}
  
function loadNewJson(url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new HttpError(response);
        }
    })
}

const prompt = (question) => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })
    return new Promise((resolve) => {
        readline.question(question, result => {
            resolve(result)
            readline.close()
        })
    })
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
    let user
    while(true) {
        let name = await prompt("Введите логин!")
        console.log(name)
        try {
            user = await loadNewJson(`https://api.github.com/users/${name}`);
            break; // ошибок не было, выходим из цикла
        } catch(err) {
            if (err instanceof HttpError && err.response.status == 404) {
            // после alert начнётся новая итерация цикла
            console.log("Такого пользователя не существует, пожалуйста, повторите ввод.")
            } else {
                // неизвестная ошибка, пробрасываем её
                throw err
            }
        }
    }
    console.log(`Полное имя: ${user.name}.`)
    return user
}

//demoGithubUser()