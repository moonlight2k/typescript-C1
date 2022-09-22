interface UserInterface {
  getFullname(): string
}

class User implements UserInterface {
  firstName: string
  lastName: string
  readonly unchangableName: string
  static readonly maxAge = 50

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.unchangableName = firstName
  }

  changeUnchangableName(): void {
    /* this.unchangableName = "foo"; */
  }

  getFullname(): string {
    return this.firstName + ' ' + this.lastName
  }
}

class Admin extends User {
  private editor?: string

  constructor(a: string, b: string, editor ?: string ) {
    super(a,b)
    this.editor = editor
  }

  // setEditor(): void {
  //   this.editor = editor
  // }

  getEditor() {
    return this.editor
  }
}

const user = new User('Monster', 'lessons')
console.log(user.firstName)
console.log(User.maxAge)

const admin = new Admin('Foo', 'Bar')
console.log(admin)
