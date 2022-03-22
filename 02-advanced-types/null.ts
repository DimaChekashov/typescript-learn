const n: null = null;
const n1: any = null;

interface Cat {
    name: string;
}

function getCat() {
    if(Math.random() > 0.5) {
        return null;
    } else {
        return {
            name: 'Вася'
        } as Cat
    }
}

const cat = getCat();
if(cat) {
    const n55 = cat.name;
}