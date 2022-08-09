const username = 'max'
//username = 'drajke'
let age = 34

//age = 24

function add1(a: number, b: number) {
  let result
  result = a + b
  return result
}

if (age > 24) {
    const isold = true
}

console.log(isold)

const add2 = (a: number, b: number, c: number = 45) => a + b

const printOutut: (a: number | string) => void = (Output) => console.log(Output)

const button1 = document.querySelector('#cf')
if (button1) {
  button1.addEventListener('click', (event) => console.log(event))
}

printOutut(add2(34, 35))

const perrson = {
  firstName: 'Dave',
  age: 34,
}

const hobbies = ['sports', 'typing']
const activeHobbies = ['boxing']

activeHobbies.push(...hobbies)

const add3 = (...number: number[]) => {
  return number.reduce((curResult, curValue) => {
    return curResult + curValue
  }, 0)
}
const add4 = (...number: [number, number, number]) => {
  return number.reduce((curResult, curValue) => {
    return curResult + curValue
  }, 0)
}
console.log(add3(23, 42, 323, 26, 65))

const [hobby1, hobby2, ...remainingHobbies] = hobbies

const { firstName, age: date } = perrson
