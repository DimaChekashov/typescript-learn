function loggId(id: string | number): void {
    console.log(id);
}

const c = loggId(1);

function multiplyy(f: number, s?: number) {
    if(!s) {
        return f * f;
    }
}

type voidFunc = () => void;

const f1: voidFunc = () => {

}

const f2: voidFunc = () => {
    return true;
}

const b = f2();

const cars = ['BMW', 'Mersedes', 'Lexus'];

const person = {
    s: ['']
}

cars.forEach((car) => person.s.push(car));