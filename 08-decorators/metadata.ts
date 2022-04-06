import 'reflect-metadata';

const POSITIVE_METADATA_KEY = Symbol('POSITIVE_METADATA_KEY');

interface IUserService9 {
    getUsersInDatabase(): number;
}

class UserService9 implements IUserService9 {
    private _users: number;

    getUsersInDatabase(): number {
        return this._users;
    }

    @Validate9()
    setUsersInDatabase(@Positive9() num: number): void {
        this._users = num;
    }
}

function Positive9() {
    return(
        target: Object,
        propertyKey: string | symbol,
        parameterIndex: number
    ) => {
        console.log(Reflect.getOwnMetadata('design:type', target, propertyKey));
        console.log(Reflect.getOwnMetadata('design:paramtypes', target, propertyKey));
        console.log(Reflect.getOwnMetadata('design:returntype', target, propertyKey));
        let existParams: number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || [];
        existParams.push(parameterIndex);
        Reflect.defineMetadata(POSITIVE_METADATA_KEY, existParams, target, propertyKey);
    }
}

function Validate9() {
    return(
        target: Object,
        propertyKey: string | symbol,
        descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
    ) => {
        let method = descriptor.value;
        descriptor.value = function (...args: any) {
            let positiveParams: number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || [];
            if(positiveParams) {
                for (let index of positiveParams) {
                    if (args[index] < 0) {
                        throw new Error('Число должно быть больше нуля');
                    }
                }
            }
            return method?.apply(this, args);
        }
    }
}

const userService9 = new UserService9();
console.log(userService9.setUsersInDatabase(10));
console.log(userService9.setUsersInDatabase(-1));
