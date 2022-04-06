interface IUserService7 {
    users: number;
    getUsersInDatabase(): number;
}

class UserService7 implements IUserService7 {
    private _users: number;

    set users(num: number) {
        this._users = num;
    }
    
    @Log7()
    get users() {
        return this._users;
    }

    getUsersInDatabase(): number {
        throw new Error('Ошибка');
    }
}

function Log7() {
    return(
        target: Object,
        _: string | symbol,
        descriptor: PropertyDescriptor
    ) => {
        const set = descriptor.set;

        descriptor.set = (...args: any) => {
            console.log(args);
            set?.apply(target, args);
        }
    }
}

const userService7 = new UserService7();
userService7.users = 1;
console.log(userService7.users);
