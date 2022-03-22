function getFullName(userEntity: {firstname: string, surname: string}): string {
    return `${userEntity.firstname} ${userEntity.surname}`;
}

const user = {
    firstname: 'Dima',
    surname: 'Chekashov',
    city: 'Zainsk',
    age: 23
}

console.log(getFullName(user));