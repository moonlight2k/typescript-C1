class Department {
    // private name: string;
    // private id: number;
    private employees: string[] = [];

    constructor(private name: string, private readonly id: number) {
        //this.name = n;
    }

    describe(this: Department) {
        console.log(`${this.name} Department, ID : ${this.id}`);
    }

    addEmployee(...employee: string[]) {
        this.employees.push(...employee);
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ItDepartment extends Department {
    
    constructor(id: number, private admins: string[]) {
        super('TI', id);
        this.admins = admins;
    }

    printAdmins() {
        console.log(this.admins)
    }
}

class AccountingDept extends Department {
    constructor(id: number, public reports: string[]) {
        super('Accounting', id)
        this.reports = reports;
    }

    addReports(report: string) {
        this.reports.push(report);
    }

    printReports() {
        console.log(this.reports);
    }
}

const Accounting = new AccountingDept(24, []);
const IT = new ItDepartment(17, ['mane', 'jake']);


Accounting.addEmployee('Max');
Accounting.addEmployee('Levi');
Accounting.printEmployeeInfo();
Accounting.describe();
Accounting.addReports('Something went wrong')
Accounting.printReports()
IT.addEmployee('trank', 'steve', 'may');
IT.printEmployeeInfo();
IT.describe();
IT.printAdmins()

//Accounting.employees[2] = 'Anna';


// const AccountingCopy = { name: 'd', describe: Accounting.describe };

// AccountingCopy.describe();