const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const question = (str) => new Promise(resolve => rl.question(str, resolve))

const steps = {
    start: async () => {
        return steps.go()
    },
    go: async () => {
        const inLine = await question('Введите число: ')
        const x = Number(inLine)
        if (isNaN(x)) {
            console.log('Ошибка! Вы ввели не целое число!')
            return steps.start()
        }
        if (x == num) {
            console.log('Поздравляем! Число отгадано!')
            return steps.finish()
        }
        if (x > num) console.log('Меньше')
        else console.log('Больше')
        return steps.start()
    },
    finish: async () => {
      rl.close();
    },
}

const num = getRandomInRange(0,100)
console.log('Загадано целое число в диапазоне от 0 до 100')
steps.start()
