//type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a:number, b:number): number
}

let addd: AddFn;
addd = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Named {
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named {
    greet?(phrase: string): void;
};

class Person implements Greetable {
    age = 30;
    constructor(public name?: string) { }
    greet(phrase: string) {
        if (this.name) {
            console.log(phrase + '' + this.name);
        }
    }
}

let user1 = new Person('maxinne');

//user1.greet('hello there  ');