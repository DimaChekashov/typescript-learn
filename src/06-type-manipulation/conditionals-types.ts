const ca: number = Math.random() > 0.5 ? 1 : 0;

interface HTTPResponse<T extends 'success' | 'failed'> {
    code: number;
    data: T extends 'success' ? string : Error;
}

const csuc: HTTPResponse<'success'> = {
    code: 200,
    data: 'done'
}

const cerr: HTTPResponse<'failed'> = {
    code: 200,
    data: new Error()
}

class ConUser {
    id: number;
    name: string;
}

class ConUserPersistend extends ConUser {
    dbId: string;
}

function getConUser(id: number): ConUser;
function getConUser(dbId: string): ConUserPersistend;
function getConUser(dbIdOrId: string | number): ConUser | ConUserPersistend {
    if (typeof dbIdOrId === 'number') {
        return new ConUser();
    } else {
        return new ConUserPersistend();
    }
}

type ConUserOrUserPersistend<T extends string | number> = T extends number ? ConUser : ConUserPersistend;

function getUser2<T extends string | number>(id: T): ConUserOrUserPersistend<T> {
    if (typeof id === 'number') {
        return new ConUser() as ConUserOrUserPersistend<T>;
    } else {
        return new ConUserPersistend() as ConUserOrUserPersistend<T>;
    }
}

const cores =getUser2(1);
const cores2 =getUser2('qwerty');
