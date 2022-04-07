type Modifier = 'read' | "update" | "create";

type MUserRoles = {
    customers?: Modifier;
    projects?: Modifier;
    adminPanel?: Modifier;
}

type ModifierToAccess<Type> = {
    +readonly [Propery in keyof Type as Exclude<`canAccess${string & Propery}`, 'canAccessadminPanel'>]-?: boolean;
}

type MUserAccess2 = ModifierToAccess<MUserRoles>;

type MUserAccess1 = {
    customers?: boolean;
    projects?: boolean;
    adminPanel?: boolean;
}