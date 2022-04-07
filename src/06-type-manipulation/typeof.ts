let strOrNum: string | number;

if(Math.random() > 0.5) {
    strOrNum = 5;
} else {
    strOrNum = "str";
}

if(typeof strOrNum === 'string') {
    console.log(strOrNum);
} else {
    console.log(strOrNum);
}

let str2OrNum: typeof strOrNum;

const tyuser = {
    name: "Vasya"
};

type keyOfUser = keyof typeof tyuser;

enum TDirection {
    Up,
    Down
}

type d = keyof typeof TDirection;