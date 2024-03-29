abstract class Department {
  static fiscalYear = 2020
  // private name: string;
  // private id: number;
  protected employees: string[] = []

  constructor(protected name: string, protected readonly id: number) {
    //this.name = n;
    //console.log(Department.fiscalYear)
  }

  static creatEmployee(name: string) {
    return { name: name }
  }

  abstract describe(this: Department): void

  addEmployee(this: Department, ...employee: string[]) {
    this.employees.push(...employee)
  }

  printEmployeeInfo(this: Department) {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

class AccountingDept extends Department {
  private lastReport: string
  private static instance: AccountingDept

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport
    }
    throw new Error('No Report Found')
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Something Wrong with the report')
    }
    this.addReports(value)
  }

  private constructor(id: number, private reports: string[]) {
    super('Accounting', id)
    this.lastReport = reports[0]
  }

  static getInstance() {
    if (this.instance) {
      return AccountingDept.instance
    }
    this.instance = new AccountingDept(25, ['isuvn', 'suvbsibvi', 'suivusn'])
    return this.instance
  }

  describe() {
    console.log(`${this.name} Department, ID : ${this.id}`)
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return
    }
    this.employees.push(name)
  }

  addReports(report: string) {
    this.reports.push(report)
    this.lastReport = report
  }

  printReports(this: AccountingDept) {
    console.log(this.reports)
  }
}

class ItDepartment extends Department {
  constructor(id: number, private admins: string[]) {
    super('IT', id)
    this.admins = admins
  }

  describe() {
    console.log(`${this.name} Department, ID : ${this.id}`)
  }

  printAdmins(this: ItDepartment) {
    console.log(this.admins)
  }
}

const employee1 = Department.creatEmployee('jason')
console.log(employee1, Department.fiscalYear)

//const Accounting = new AccountingDept(24, [])
const Accounting = AccountingDept.getInstance()
const IT = new ItDepartment(17, ['mane', 'jake'])

Accounting.mostRecentReport = 'Classic Drumming'
Accounting.addReports('Something went wrong')
console.log(Accounting.mostRecentReport)

Accounting.addEmployee('Max')
Accounting.addEmployee('Levi')
Accounting.printEmployeeInfo()
Accounting.describe()
Accounting.printReports()
IT.addEmployee('trank', 'steve', 'may')
IT.printEmployeeInfo()
IT.describe()
IT.printAdmins()

//Accounting.employees[2] = 'Anna'

// const AccountingCopy = { name: 'd', describe: Accounting.describe }

// AccountingCopy.describe()
