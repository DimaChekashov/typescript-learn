const ga: Array<number> = [1, 2, 3];

async function test() {
    const gga = await new Promise<number>((resolve, regect) => {
        resolve(1);
    })
}

const gcheck: Record<string, boolean> = {
    drive: true,
    kpp: false
}