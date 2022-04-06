interface IUserService5 {
    users: number;
    getUsersInDatabase(): number;
}

class UserService5 implements IUserService5 {
    users: number;

    @Catch5({ rethrow: true })
    getUsersInDatabase(): number {
        throw new Error('Ошибка');
    }
}

function Catch5({ rethrow }: { rethrow: boolean } = { rethrow: true } ) {
    return(
        target: Object,
        _: string | symbol,
        descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
    ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
        const method = descriptor.value;
        descriptor.value = (...args: any[]) => {
            try {
                return method?.apply(target, args);
            } catch(e) {
                if (e instanceof Error) {
                    console.log(e.message);
                    if (rethrow) {
                        throw e;
                    }
                }
            }
        }
    }
}

console.log(new UserService5().getUsersInDatabase());
