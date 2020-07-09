// export default () => {
//     return `<div>classChallenge</div>`
// }

// export const name = "welcome"

// export function sumNumbers(numOne, numTwo) {
//     sum = numOne + numTwo
//     return sum
// }


function toThePowerOf(numbers) {
    let i = 1
    numbers.forEach((number) => {
        let reducedNum = numbers.reduce(i++ * i)
    })
    return i
}

console.log(toThePowerOf(2, 3))

// function sumList(numbers) {
    //   let sum = 0
    //   numbers.forEach((number) => {
    //     debugger
    //     sum = sum + number
    //   })
    //   return sum
