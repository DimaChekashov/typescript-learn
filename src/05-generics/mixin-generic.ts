type MConstructor = new (...args: any[]) => {};
type GMConstructor<T = {}> = new (...args: any[]) => T;

class MList {
    constructor(public items: string[]) { }
}

class MAccordion {
    isOpened: boolean;
}

type MListType = GMConstructor<MList>;
type MAccordionType = GMConstructor<MAccordion>;

class MExtendedListClass extends MList {
    first() {
        return this.items[0];
    }
}

function MExtendedList<TBase extends MListType & MAccordionType>(Base: TBase) {
    return class MExtendedList extends Base {
        first() {
            return this.items[0];
        }
    }
}

class MAccordionList {
    isOpened: boolean;
    constructor(public items: string[]) { }
}

const mlist = MExtendedList(MAccordionList);

const mres = new mlist(['first', 'second']);

console.log(mres.first());