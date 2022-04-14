class SUser {
    githubToken: string;
    jwtToken: string;
}

interface AuthStratagy {
    auth(user: SUser): boolean;
}

class Auth {
    constructor(private strategy: AuthStratagy) {}

    setStrategy(strategy: AuthStratagy) {
        this.strategy = strategy;
    }

    public authUser(user: SUser): boolean {
        return this.strategy.auth(user);
    }
}

class JWTStrategy implements AuthStratagy {
    auth(user: SUser): boolean {
        if (user.jwtToken) {
            return true;
        }

        return false;
    }
}

class GithubStrategy implements AuthStratagy {
    auth(user: SUser): boolean {
        if (user.githubToken) {
            // Идем в API
            return true;
        }

        return false;
    }
}

const suser = new SUser();
suser.jwtToken = 'token';
const sauth = new Auth(new JWTStrategy());
console.log(sauth.authUser(suser));
sauth.setStrategy(new GithubStrategy());
console.log(sauth.authUser(suser));
