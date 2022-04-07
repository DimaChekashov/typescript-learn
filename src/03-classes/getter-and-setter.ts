class GUser {
    _login: string;
    password: string;
    createdAt: Date;

    set login(l: string | number) {
        this._login = 'user-' + l;
        this.createdAt = new Date();
    }

    get login() {
        return this._login;
    }

    async getPassword(p: string) {

    }

    // set password(p: string) {

    // }
}

const guser = new GUser();
guser.login = 'myLogin';
console.log(guser);
console.log(guser.login);