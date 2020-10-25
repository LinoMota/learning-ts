let userInput: unknown
let userName: string

userInput = 2
userInput = 'fkpqeok'

if (typeof userInput === 'string')
    userName = userInput

console.log(userInput)


function generateError(message: string, code: number): never {
    throw {
        message,
        code
    }
}

generateError('Deu ruim', 500)