"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
    }
    Department.prototype.describe = function () {
        console.log("".concat(this.name, " Department, ID : ").concat(this.id));
    };
    Department.prototype.addEmployee = function () {
        var _a;
        var employee = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            employee[_i] = arguments[_i];
        }
        (_a = this.employees).push.apply(_a, employee);
    };
    Department.prototype.printEmployeeInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var ItDepartment = (function (_super) {
    __extends(ItDepartment, _super);
    function ItDepartment(id, admins) {
        var _this = _super.call(this, 'TI', id) || this;
        _this.admins = admins;
        _this.admins = admins;
        return _this;
    }
    ItDepartment.prototype.printAdmins = function () {
        console.log(this.admins);
    };
    return ItDepartment;
}(Department));
var AccountingDept = (function (_super) {
    __extends(AccountingDept, _super);
    function AccountingDept(id, reports) {
        var _this = _super.call(this, 'Accounting', id) || this;
        _this.reports = reports;
        _this.reports = reports;
        return _this;
    }
    AccountingDept.prototype.addReports = function (report) {
        this.reports.push(report);
    };
    AccountingDept.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDept;
}(Department));
var Accounting = new AccountingDept(24, []);
var IT = new ItDepartment(17, ['mane', 'jake']);
Accounting.addEmployee('Max');
Accounting.addEmployee('Levi');
Accounting.printEmployeeInfo();
Accounting.describe();
Accounting.addReports('Something went wrong.');
Accounting.printReports();
IT.addEmployee('trank', 'steve', 'may');
IT.printEmployeeInfo();
IT.describe();
IT.printAdmins();
