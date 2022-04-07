interface UserTwo {
    name: string,
    age: number,
    skills: string[],
    log: (id: number) => string
}

interface RoleTwo {
    roleId: number;
}

interface UserWithRoleTwo extends UserTwo, RoleTwo {
    createdAt: Date;
}

type UserThree = {
    name: string,
    age: number,
    skills: string[],
    log: (id: number) => string
}

let user_3: UserWithRoleTwo = {
    name: 'Joe',
    age: 33,
    skills: ['1', '2'],
    roleId: 1,
    createdAt: new Date(),
    log(id) {
        return '';
    }
}

interface UserDic {
    [index: string]: UserTwo
}

type UserDic2 = {
    [index: number]: UserTwo
}