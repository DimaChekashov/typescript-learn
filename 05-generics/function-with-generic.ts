function logMiddleware<T>(data: T): T {
    console.log(data);
    return data;
}

const gres = logMiddleware<string>("Hello World!");

function getSplitedHalf<T>(data: Array<T>): Array<T> {
    const l = data.length / 2;
    return data.splice(0, l);
}

const garr = getSplitedHalf<number>([1, 2, 3, 4, 5, 6]);