enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS = 'p',
    FAILED = 'f'
}

const res = {
    message: "Платеж успешен",
    statusCode: StatusCode.SUCCESS
}

if (res.statusCode === StatusCode.SUCCESS) {
    console.log('Success');
}

function action(status: StatusCode) {

}

action(StatusCode.SUCCESS);
action(1);
action(3);

function compute() {
    return 3;
}

enum Roles {
    ADMIN = 1,
    USER = compute()
}

function test(x: {ADMIN: number}) {

}

test(Roles);

const enum Sizes {
    SMALL = 1,
    LARGE = 2
}