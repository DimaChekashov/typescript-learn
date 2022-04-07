let d = 5;
let x: string =  d.toString();
let s: string = new String(d).valueOf();
let f: boolean = new Boolean(d).valueOf();

let z = 'asdasd';
let v: number = parseInt(z);

interface Box {
    name: string;
    email: string;
    login: string;
}

const box: Box = {
    name: 'Vasya',
    email: 'a@a.a',
    login: 'vasya'
}

interface Admin {
    name: string;
    role: number;
}

const admin: Admin = {
    ...box,
    role: 1
}

function userToAdmin(box: Box): Admin {
    return {
        name: box.name,
        role: 1
    }
}