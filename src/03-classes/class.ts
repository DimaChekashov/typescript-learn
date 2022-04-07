class CUser {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const cuser = new CUser('Вася');
console.log(cuser);
cuser.name = 'Дима';
console.log(cuser)

class CAdmin {
    role: number;
}

const cadmin = new CAdmin();
cadmin.role = 1;