interface Block {
    login: string;
    password?: string;
}

const block: Block = {
    login: 'a@a.ru',
    password: '1'
}

function multiply(first: number, second?: number): number {
    if(!second) {
        return first * first;
    }
    
    return first * second;
}

interface BlockPro {
    login: string;
    password?: {
        type: 'primary' | 'secondary'
    }
}

function testPass(block: BlockPro) {
    const t = block.password?.type;
}

function test2(param?: string) {
    const t = param ?? multiply(5);
}