interface IUserService8 {
    getUsersInDatabase(): number;
}

class UserService8 implements IUserService8 {
    private _users: number;

    getUsersInDatabase(): number {
        return this._users;
    }
    setUsersInDatabase(@Positive8() num: number, @Positive8() _: number): void {
        this._users = num;
    }
}

function Positive8() {
    return(
        target: Object,
        propertyKey: string | symbol,
        parameterIndex: number
    ) => {
        console.log(target);
        console.log(propertyKey);
        console.log(parameterIndex);
    }
}

const userService8 = new UserService8();
