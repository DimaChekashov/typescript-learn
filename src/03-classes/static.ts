class SUserService {
    // static name: string = "asdasd"
    private static db: any;

    static getUser(id: number) {
        return SUserService.db.findById(id);
    }

    constructor(id: number) {

    }

    create() {
        SUserService.db;
    }

    static {
        SUserService.db = 'sdf';
    }
}

SUserService.getUser(1);
const inst = new SUserService(1);
inst.create();