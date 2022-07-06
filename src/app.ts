const username = 'max'
//username = 'drajke'
let age = 34

age = 24

function add1(a: number, b: number) {
  let result
  result = a + b
  return result
}

// if (age > 24) {
//     let isold = true
// }

// console.log(isold)

const add2 = (a: number, b: number, c: number = 45) => a + b

const printOutut: (a: number | string) => void = (Output) => console.log(Output)

const button1 = document.querySelector('#cf')
if (button1) {
  button1.addEventListener('click', (event) => console.log(event))
}

printOutut(add2(34, 35))

const hobbies = ['sports', 'typing']
const activeHobbies = ['boxing']

activeHobbies.push(...hobbies)