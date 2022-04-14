class ComUser {
    constructor(public userId:  number) {}
}

class ComCommandHistory {
    public commands: ComCommand[] = [];

    push(command: ComCommand) {
        this.commands.push(command);
    }

    remove(command: ComCommand) {
        this.commands = this.commands.filter(c => c.commandId !== command.commandId);
    }
}

abstract class ComCommand {
    public commandId: number;

    abstract execute(): void;

    constructor(public history: ComCommandHistory) {
        this.commandId = Math.random();
    }
}

class AddUserCommand extends ComCommand {
    constructor(
        private user: ComUser, 
        private receiver: ComUserService, 
        history: ComCommandHistory
    ) {
        super(history);
    }
    execute(): void {
        this.receiver.saveUser(this.user);
        this.history.push(this);
    }

    undo() {
        this.receiver.deleteUser(this.user.userId);
        this.history.remove(this);
    }
}

class ComUserService {
    saveUser(user: ComUser) {
        console.log(`Сохраняю пользователя с id ${user.userId}`);
    }
    deleteUser(userId: number) {
        console.log(`Удаляем пользователя с id ${userId}`);
    }
}

class ComController {
    receiver: ComUserService;
    history: ComCommandHistory = new ComCommandHistory();

    addReceiver(receiver: ComUserService) {
        this.receiver = receiver;
    }

    run() {
        const addUserCommand = new AddUserCommand(
            new ComUser(1),
            this.receiver,
            this.history
        );

        addUserCommand.execute();
        console.log(addUserCommand.history);
        addUserCommand.undo();
        console.log(addUserCommand.history);
    }
}

const comController = new ComController();
comController.addReceiver(new ComUserService());
comController.run();
