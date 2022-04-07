interface IUserService4 {
    users: number;
    getUsersInDatabase(): number;
}

class UserService4 implements IUserService4 {
    users: number;

    @Log4()
    getUsersInDatabase(): number {
        throw new Error('Ошибка');
    }
}

function Log4() {
    return(
        target: Object,
        propertyKey: string | symbol,
        descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
    ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        descriptor.value = () => {
            console.log('no error');
        }
    }
}

console.log(new UserService4().getUsersInDatabase());
