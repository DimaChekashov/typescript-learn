class CoUser {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class CoUsers extends Array<CoUser> {
    searchByName(name: string) {
        return this.filter(u => u.name === name);
    }

    override toString(): string {
        return this.map(u => u.name).join(', ');
    }
}

const coUsers = new CoUsers();
coUsers.push(new CoUser('Vasya'));
coUsers.push(new CoUser('Dima'));
console.log(coUsers.toString());

class CoUserList {
    users: CoUser[];

    push(u:CoUser) {
        this.users.push(u);
    }
}

class CoPayment {
    date: Date;
}

class CoUserWithPayment extends CoPayment {
    name: string;   
}

class CoUserWithPayment2 {
    user: CoUser;
    payment: CoPayment;

    constructor(user: CoUser, payment: CoPayment) {
        this.payment = payment;
        this.user = user;
    }
}