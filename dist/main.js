"use strict";
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName;
    }
    changeUnchangableName() {
    }
    getFullname() {
        return this.firstName + ' ' + this.lastName;
    }
}
User.maxAge = 50;
class Admin extends User {
    setEditor(editor) {
        this.editor = editor;
    }
    getEditor() {
        return this.editor;
    }
}
const user = new User('Monster', 'lessons');
console.log(user.firstName);
console.log(User.maxAge);
const admin = new Admin('Foo', 'Bar');
console.log(admin);
