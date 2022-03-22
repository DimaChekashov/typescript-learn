type httpMethod = 'post' | 'get';

type coolString = string;

function fetchWithAuth(url: string, method: httpMethod): 1 | -1 {
    return 1;
}

type User = {
    name: string,
    age: number,
    skills: string[]
}

type Role = {
    name: string,
    id: number
}

// type UserWithRole = User | Role;
// type UserWithRole = User & Role;
type UserWithRole = {
    user: User,
    role: Role
}

let user_2: UserWithRole = {
    name: 'Joe',
    age: 33,
    skills: ['1', '2'],
    id: 1
}