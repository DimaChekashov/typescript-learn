interface PUser {
    name: string;
    age?: number;
    email: string;
}

type partial = Partial<PUser>;
const p: partial = {};

type required = Required<PUser>;
type readonly = Readonly<PUser>;
type requiredAndReadonly = Required<Readonly<PUser>>;
