import express, {Application, Request, Response, NextFunction } from "express";
import { type } from "os";

const app: Application = express();

interface Params {
    a: number;
    b: number;
}

type Add = (x: Params) => number;

const add: Add = x => {
    return x.a + x.b
}

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    add({a : 1, b : 2});
    res.send('Hello');
});

app.listen(5555, () => console.log('Server'))