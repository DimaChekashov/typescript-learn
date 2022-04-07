interface IUserService3 {
    users: number;
    getUsersInDatabase(): number;
}

// @nullUser3
@setUsers(2)
@log()
// @threeUserAdvanced3
// @setUserAdvanced3(4)
class UserService3 implements IUserService3 {
    users: number;

    getUsersInDatabase(): number {
        return this.users;    
    }
}

function nullUser3(target: Function) {
    target.prototype.users = 0;
}

function setUsers(users: number) {
    console.log('setUsers init');
    return (target: Function) => {
        console.log('setUsers run');
        target.prototype.users = users;
    }
}

function log() {
    console.log('log init');
    return (target: Function) => {
        console.log('log run');
        console.log(target);
    }
}

function setUserAdvanced3(users: number) {
    return <T extends { new(...args: any[]): {} }>(constructor: T) => {
        return class extends constructor {
            users = users;
        }
    }
}

function threeUserAdvanced3<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        users = 3;
    }
}

console.log(new UserService3().getUsersInDatabase());