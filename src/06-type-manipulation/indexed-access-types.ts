interface ARole {
    name: string;
}

interface APermission {
    endDate: Date;
}

interface AUser {
    name: string;
    roles: ARole[];
    permission: APermission;
}

const auser: AUser = {
    name: "Vasya",
    roles: [],
    permission: {
        endDate: new Date()
    }
}

const anameUser = auser['name'];
// const roleNames = 'roles';
let roleNames: 'roles' = 'roles';

type aroleType = AUser['roles'];
type aroleType2 = AUser[typeof roleNames];

type roleType = AUser['roles'][number];
type dateType = AUser['permission']['endDate'];

const roles = ['admin', 'user', 'super-user'] as const;
type roleTypes = typeof roles[number];
