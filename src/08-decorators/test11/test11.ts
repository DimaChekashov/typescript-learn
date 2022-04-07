interface IUserServiceT {
    users: number;
    getUsersInDatabase(): number;
}

// @addCreatedAt
@CreatedAt
class UserServiceT implements IUserServiceT {
    users: number = 1000;

    getUsersInDatabase(): number {
        return this.users;    
    }
}


// My solve
// function addCreatedAt<T extends { new (...args: any[]): {}}>(constructor: T) {
//     return class extends constructor {
//         createdAt: Date = new Date();
//     }
// }

// console.log(new UserServiceT());

function CreatedAt<T extends { new(...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
        createdAt = new Date();
    }
}

type CreatedAt = {
    createdAt: Date
}

console.log((new UserServiceT() as IUserServiceT & CreatedAt).createdAt);