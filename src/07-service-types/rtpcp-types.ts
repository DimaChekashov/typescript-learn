class RUser {
    constructor(public id: number, public name: string) { }
}

function rGetData(id: number): RUser {
    return new RUser(id, 'Vasya');
}

type RT = ReturnType<typeof rGetData>;
type RT2 = ReturnType<() => void>;
type RT3 = ReturnType<<T>() => T>;
type RT4 = ReturnType<<T extends string>() => T>;

type PT = Parameters<typeof rGetData>;
type first = PT[0];

type CP = ConstructorParameters<typeof RUser>;
type InT = InstanceType<typeof RUser>;