interface TBox {
    name: string;
    email: string;
    login: string;
}

const tbox: TBox = {
    name: 'Vasya',
    email: 'a@a.a',
    login: 'vasya'
}

interface TAdmin {
    name: string;
    role: number;
}

function logTId(id: string | number) {
    if(isTString(id)) {
        console.log(id);
    } else {
        console.log(id);
    }
}

function  isTString(x: string | number): x is string {
    return typeof x === 'string';
}

function isAdmin(tbox: TBox | TAdmin): tbox is TAdmin {
    return 'role' in tbox;
}

function isAdminAlternative(tbox: TBox | TAdmin): tbox is TAdmin {
    return (tbox as TAdmin).role !== undefined;
}

function setRole(tbox: TBox | TAdmin) {
    if(isAdmin(tbox)) {
        tbox.role = 0;
    } else {
        throw new Error('Пользователь не админ');
    }
}