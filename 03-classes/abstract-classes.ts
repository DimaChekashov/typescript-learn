abstract class AController {
    abstract handle(req: any): void;

    handleWithLogs(req: any) {
        console.log("Start");
        this.handle(req);
        console.log("End");
    }
}

class AUserController extends AController {
    handle(req: any): void {
        console.log(req);
    }
}

// new AController() - error
const ac = new AUserController();
ac.handleWithLogs("Request");