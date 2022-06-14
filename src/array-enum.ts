// const person: {
//   name: string
//   age: number
//   hobbies: string[]
//   role: [number, string]
// } = {
//   // const person = {
//   name: 'Kenneth',
//   age: 25,
//   hobbies: ['sports', 'cooking'],
//   role: [2, 'author'],
// }

// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'Kenneth',
  age: 25,
  hobbies: ['sports', 'cooking'],
  role: Role.ADMIN,
}

//person.role.push('admin')
//person.role[1] = 10

let favouriteActivites: string[]
favouriteActivites = ['string']

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase)
  //console.log(hobby.map) Error
}

if (person.role === Role.ADMIN) {
  console.log('is admin')
}
