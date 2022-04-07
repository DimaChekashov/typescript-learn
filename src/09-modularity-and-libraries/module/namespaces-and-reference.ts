export namespace A {
    export const a = 5;

    export interface B {
        c: number;
    }
}

export default function run() {
    console.log('run');
}

export interface B {
    c: number;
}

export const Obj = {};

export type MyType = string | number;
export type MyType2 = string | number;

export class Test {
    name: string;
}