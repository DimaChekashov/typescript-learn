interface IUserService2 {
    users: number;
    getUsersInDatabase(): number;
}

// @nullUser2
@threeUserAdvanced
@nullUser2
class UserService2 implements IUserService2 {
    users: number = 1000;

    getUsersInDatabase(): number {
        return this.users;    
    }
}

function nullUser2(target: Function) {
    target.prototype.users = 0;
}

function threeUserAdvanced<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        users = 3;
    }
}

console.log(new UserService2().getUsersInDatabase());