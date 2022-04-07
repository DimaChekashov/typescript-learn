class COUser {
    name: string;
    age: number;

    constructor();
    constructor(name: string);
    constructor(age: number);
    constructor(name: string, age: number);
    constructor(ageOrName?: string | number, age?: number) {
        if(typeof ageOrName === 'string') {
            this.name = ageOrName;
        } else if(typeof ageOrName === 'number') {
            this.age = ageOrName;
        } else if(typeof age === 'number') {
            this.age = age;
        }
    }
}

const couser = new COUser('Вася');
const couser2 = new COUser();
const couser3 = new COUser(23);
const couser4 = new COUser('Вася', 23);