import { type } from 'os'

// intersection types

type Adminn = {
  name: string
  privileges: string[]
}

type Employee = {
  name: string
  startDate: Date
}

type ElevatedEmployee = Adminn & Employee

const e1: ElevatedEmployee = {
  name: 'maw',
  privileges: ['creat-server'],
  startDate: new Date(),
}

// type guards and function overloads

type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable & Numeric


function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: number, b: number): number;
function add(a: string, b: number): number;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b
}

const result = add('max', 'dsmn')
result.split(' ')

type UnknownEmployee = Employee | Adminn

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name :' + emp.name)
  if ('privileges' in emp) {
    console.log('privileges :' + emp.privileges)
  }

  if ('startDate' in emp) {
    console.log('startDate :' + emp.startDate)
  }
}

printEmployeeInformation(e1)
printEmployeeInformation({ name: 'Felix', startDate: new Date() })

class Car {
  drive() {
    console.log('Driving.....')
  }
}

class Truck {
  drive() {
    console.log('Driving a truck !')
  }

  loadingCargo(amount: number) {
    console.log('Loading cargo....' + amount)
  }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
  vehicle.drive()
  if (vehicle instanceof Truck) {
    vehicle.loadingCargo(2424)
  }
}

useVehicle(v1)
useVehicle(v2)

// discriminated unions

interface Bird {
    type: 'Bird'
    flyingSpeed: number
}

interface Horse {
    type: 'Horse'
    runningSpeed: number
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed
    switch (animal.type) {
        case 'Bird':
            speed = animal.flyingSpeed
            break
        case 'Horse':
            speed = animal.runningSpeed
    }
    console.log('Moving at speed: ' + speed)
}

moveAnimal({ type: 'Bird', flyingSpeed: 4533 });

// type casting

//const blue = <HTMLInputElement>document.getElementById('cda')!;
if (typeof window !== 'undefined') {
  console.log('You are on the browser')
} else {
  console.log('you are on the server')
}
const blue = document.querySelector('user-input')! as HTMLInputElement;

  blue.value = 'hello';

// index properties

interface ErrorContainer {// { email: 'Not a validemail',username: 'must start with letter' }
  //id : number
  [prop: string]: string
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  username: 'Must start with a capital character'
}

// optional chaining

const fetchUserData = {
  id: 34,
  name: 'mzod',
  job : {title : 'CEO', description : 'my company'}
}

console.log(fetchUserData?.job?.title);

// nullish coalescing

const idvi = '';
const idvis = null;

const storedData = idvi || 'Default';
const storedDataP = idvis ?? 'Default';

console.log(storedData)
console.log(storedDataP)