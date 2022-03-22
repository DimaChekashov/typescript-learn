const skills2: [string, number] = ["Dev", 15];

const age = skills2[1];
const skillName = skills2[0];

const [skillName2, age2] = skills2;

const skills3: [string, number, ...boolean[]] = ["Dev", 15, true, false, true];