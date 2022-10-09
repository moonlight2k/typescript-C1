// Built in Generics
const namsik: Array<string | number> = [4553, 'manuel']
//names[0].toString()

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done')
  }, 2000)
})

promise.then((data) => {
  data.split(' ')
})

// Generic Functions and Constraints

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}

const mergedObj = merge(
  { name: 'sjkjs', dense: ['bdudrgu', 4466], Zeek: false },
  { age: 32 },
)
const mergedObj2 = merge(
  { id: 'djnsjks' },
  { age: 675, bram: ['idnmildmg', 8783] },
)
console.log(mergedObj.name)

interface lengthy {
  length: number
}

function countAndDescribe<T extends lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no elements'
  if (element.length === 1) {
    descriptionText = 'Got 1 elemet.'
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements .'
  }
  return [element, descriptionText]
}
console.log(countAndDescribe('Hello There!!'))

// KeyOf Constraints

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U,) {
  return 'Value:  ' + obj[key]
}

extractAndConvert({ kus: 'decktile' }, 'kus')

// Generic Classes

class DataStorage<T extends string | number | boolean> {
  private data: T[] = []

  addItem(item: T) {
    this.data.push(item)
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return
    }
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems() {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>()
textStorage.addItem('nsnsins')
textStorage.addItem('SEGSF')
textStorage.addItem('SSgsfsESF')
textStorage.removeItem('SEGSF')
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>()

// const objectStorage = new DataStorage<object>();
// const objZ = {name: 'dsgoisg'}

// objectStorage.addItem(objZ)
// objectStorage.addItem({ name: 'sekmsm' });
// //....
// textStorage.removeItem(objZ)

// Generic Utility Types :
// Partial type
interface CourseGoal {
  title: string
  description: string
  completeUntil: Date
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date,
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}
  courseGoal.title = title
  courseGoal.description = description
  courseGoal.completeUntil = date
  return courseGoal as CourseGoal
}

// ReadOnly type

const names: Readonly<string[]> = ['ushsiuo', 'siunie', 'swfsaefa']
// names.push('sesfs');
// names.pop('swfsaefa')
