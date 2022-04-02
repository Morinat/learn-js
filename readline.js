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

prompt('Wha?').then(console.log)