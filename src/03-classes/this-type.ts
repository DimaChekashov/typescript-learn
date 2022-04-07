class TUserBuilder {
    name: string;

    setName(name: string): this {
        this.name = name;
        return this;
    }

    isAdmin(): this is TAdminBuilder {
        return this instanceof TAdminBuilder;
    }
}

class TAdminBuilder extends TUserBuilder {
    roles: string[];
}

const tres = new TUserBuilder().setName('Vasya');
const tres2 = new TAdminBuilder().setName('Vasya');

let ttuser: TUserBuilder | TAdminBuilder = new TUserBuilder();

if (ttuser.isAdmin()) {
    console.log(ttuser);
} else {
    console.log(ttuser);
}