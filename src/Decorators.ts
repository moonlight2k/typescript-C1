// Class Decorators
// Class Decorators take one argument (the class constructor)
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }
}

// Decrator Factories (this returns the decorator function so that you can pass arguments
// to the decorator factory)
function withTemplate(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(original: T,) {
    return class extends original {
      constructor(...args: any[]) {
        super()
        console.log('Logging Template')
        const hookEl = document.getElementById(hookId)! as HTMLElement
        if (hookEl) {
          hookEl.innerHTML = template
          hookEl.querySelector('h1')!.textContent = this.name
        }
      }
    }
  }
}

@Logger('Logging -- Person')
@withTemplate('<h1>My Person Object</h1>', 'app')
class Personz {
  name = 'Max'

  constructor() {
    console.log('Creating person object...')
  }
}

const pers = new Personz()

console.log(pers)

// Property decorators take 2 arguments (the target or prototype of the object if its an instance property
// or constructor funtion if its a static property and the property name or identifier)
function Log(target: any, propertyName: string | symbol) {
  console.log('Property Decorator')
  console.log("Target : ")
  console.log(target)
  console.log(propertyName)
}

// Accessor decorators take 3 arguments (the target or prototype of the object if its an instance property
// or constructor funtion if its a static property , the name of accessor and the property discriptor)
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor Decorator')
  console.log("Target : ")
  console.log(target)
  console.log(name)
  console.log("Descriptor : ")
  console.log(descriptor)
}

// Method decorators take 3 arguments (the target or prototype of the object if its an instance property
// or constructor funtion if its a static property , the name of the method and the property discriptor)
function Log3(target: any, name: string | symbol, descriptor: PropertyDescriptor,) {
  console.log('Method Decorator')
  console.log("Target : ")
  console.log(target)
  console.log(name)
  console.log("Descriptor : ")
  console.log(descriptor)
}

// Parameter decorators take 3 arguments (the target or prototype of the object if its an instance property
// or constructor funtion if its a static property , the name of the method where the parameter is 
// and the position of the parameter)
function Log4(target: any, name: string | symbol, position: number) {
  console.log('Parameter Decorator')
  console.log("Target : ")
  console.log(target)
  console.log(name)
  console.log(position)
}

class Product {
  @Log
  title: string
  private _price: number
  tax: number

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val
    } else {
      throw new Error('Enter correct amount ! ')
    }
  }

  constructor(t: string, p: number, tax: number) {
    this.title = t
    this._price = p
    this.tax = tax
  }

  @Log3
  getPrice(@Log4 tax: number) {
    return tax
  }

  @Log3
  getPriceWithTax() {
    return this._price * (1 + this.tax)
  }
}

const p1 = new Product('books', 48, 2)
console.log(p1.getPriceWithTax())
p1.price = 34
console.log(p1.getPriceWithTax())

// AutoBind Decorator

function AutoBind(_: any, _2: string, discriptor: PropertyDescriptor) {
  const originalMethod = discriptor.value
  const adjDiscriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this)
      return boundFn
    },
  }
  return adjDiscriptor
}

class Printer {
  message = 'This works'

  @AutoBind
  showMessage() {
    console.log(this.message)
  }
}

const p2 = new Printer()
const buttons = document.getElementById('cafs') as HTMLElement
//buttons?.addEventListener('click', p2.showMessage.bind(p2))
buttons?.addEventListener('click', p2.showMessage)

// Validation With Decorators

interface ValidatorConfig {
  [prop: string]: {
    [validatableProp: string]: string[] // ['required' , 'positive']
  }
}

const registerdValidators: ValidatorConfig = {}

function Required(target: any, propName: string) {
  registerdValidators[target.constructor.name] = {
    ...registerdValidators[target.constructor.name] ,
    [propName]: ['required'],
  }
}

function PositiveNumber(target: any, propName: string) {
  registerdValidators[target.constructor.name] = {
    ...registerdValidators[target.constructor.name] ,
    [propName]: ['positive'],
  }
}

function Validate(obj: any) {
  const objValidatorConfig = registerdValidators[obj.constructor.name]
  if (!objValidatorConfig) {
    return true
  }
  let isValid = true
  for (const prop in objValidatorConfig) {
    console.log(prop)
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop]
          break
        case 'positive':
          isValid = isValid && obj[prop] > 0
      }
    }
  }
  return isValid;
}
class Course {
  @Required
  title: string
  @PositiveNumber
  price: number

  constructor(t: string, p: number) {
    this.title = t
    this.price = p
  }
}

const courseForm = document.querySelector('form')!
courseForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const titles = document.getElementById('title') as HTMLInputElement
  const prices = document.getElementById('price') as HTMLInputElement

  const title = titles.value
  const price = +prices.value

  const createdCourse = new Course(title, price)
  if (!Validate(createdCourse)) {
    alert('Invalid input, Please try again')
    return
  }
  console.log(createdCourse)
})
