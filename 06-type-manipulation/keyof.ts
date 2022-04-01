interface KUser {
    name: string;
    age: number;
}

type KeysOfUser = keyof KUser;

const key: KeysOfUser = 'age';

function getValue<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const kuser: KUser = {
    name: "Vasya",
    age: 30
}

const kuserName = getValue(kuser, 'name');