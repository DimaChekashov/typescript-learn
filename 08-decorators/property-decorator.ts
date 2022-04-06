interface IUserService6 {
    users: number;
    getUsersInDatabase(): number;
}

class UserService6 implements IUserService6 {
    @Max6(100)
    users: number;

    getUsersInDatabase(): number {
        throw new Error('Ошибка');
    }
}

function Max6(max: number) {
    return(
        target: Object,
        propertyKey: string | symbol,
    ) => {
        let value: number;
        const setter = function name(newValue: number) {
            if (newValue > max) {
                console.log(`Нельзя установить значение больше ${max}`);
            } else {
                value = newValue;
            }
        }

        const getter = function () {
            return value;
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    }
}

const userService6 = new UserService6();
userService6.users = 1;
console.log(userService6.users);
userService6.users = 1000;
console.log(userService6.users);