function getSplitedHalf2<T>(data: Array<T>): Array<T> {
    const l = data.length / 2;
    return data.splice(0, l);
}

const gsplit: <T>(data: Array<T>) => Array<T> = getSplitedHalf2;
const gsplit2: <Y>(data: Array<Y>) => Array<Y> = getSplitedHalf2;

interface ILogLine<T> {
    timeStamp: Date;
    data: T;
}

type LogLineType<T> = {
    timeStamp: Date;
    data: T;
}

const glogLine: LogLineType<{ a: number }> = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
}