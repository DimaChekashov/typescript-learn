interface Prototype<T> {
    clone(): T;
}

class UserHistory implements Prototype<UserHistory> {
    createdAt: Date;

    constructor(public email: string, public name: string) {
        this.createdAt = new Date();
    }

    clone(): UserHistory {
        let target = new UserHistory(this.email, this.name);
        target.createdAt = this.createdAt;
        return target;
    }
}

let puser = new UserHistory('a@a.ru', 'Anton');
console.log(puser);
let puser2 = puser.clone();
puser2.email = 'b@b.ru';
console.log(puser2)