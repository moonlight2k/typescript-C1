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
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName;
    }
    User.prototype.changeUnchangableName = function () {
        /* this.unchangableName = "foo"; */
    };
    User.prototype.getFullname = function () {
        return this.firstName + ' ' + this.lastName;
    };
    User.maxAge = 50;
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
var user = new User('Monster', 'lessons');
console.log(user.firstName);
console.log(User.maxAge);
var admin = new Admin('Foo', 'Bar');
console.log(admin);
// interface UserInterface {
//   getFullname(): string;
// }
// class User implements UserInterface {
//   firstName: string;
//   lastName: string;
//   readonly unchangableName: string;
//   static readonly maxAge = 50;
//   constructor(firstName: string, lastName: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.unchangableName = firstName;
//   }
//   changeUnchangableName(): void {
//     /* this.unchangableName = "foo"; */
//   }
//   getFullname(): string {
//     return this.firstName + " " + this.lastName;
//   }
// }
// class Admin extends User {
//   private editor: string;
//   setEditor(editor: string): void {
//     this.editor = editor;
//   }
//   getEditor(): string {
//     return this.editor;
//   }
// }
// const user = new User("Monster", "lessons");
// console.log(user.firstName);
// console.log(User.maxAge);
// const admin = new Admin("Foo", "Bar");
// console.log(admin);
