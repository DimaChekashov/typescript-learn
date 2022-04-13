class KVDatabase {
    private db: Map<string, string> = new Map();

    save(key: string, value: string) {
        this.db.set(key, value);
    }
}

class PersistentDB {
    savePersistent(data: Object) {
        console.log(data);
    }
}

class PersistentDBAdapter extends KVDatabase {
    constructor(public database: PersistentDB) {
        super();
    }

    override save(key: string, value: string): void {
        this.database.savePersistent({ key, value });
    }
}

function runD(base: KVDatabase) {
    base.save('key', 'myValue');
}

runD(new PersistentDBAdapter(new PersistentDB));
class KVADatabase {
    private db: Map<string, string> = new Map();

    save(key: string, value: string) {
        this.db.set(key, value);
    }
}

class PersistentDBA {
    savePersistent(data: Object) {
        console.log(data);
    }
}
class PersistentDBAAdapter extends KVADatabase {
    constructor(public database: PersistentDBA) {
        super();
    }

    override save(key: string, value: string): void {
        this.database.savePersistent({ key: value });
    }
}

function aRun(base: KVADatabase) {
    base.save('key', 'myValue');
}

aRun(new PersistentDBAAdapter(new PersistentDBA));