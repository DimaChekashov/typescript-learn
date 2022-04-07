// Необходимо написать функцию сортировки любых
// объектов, которые имеют id по убыванию и по возрастанию

const data = [
	{ id: 2, name: 'Петя' },
	{ id: 1, name: 'Вася' },
	{ id: 3, name: 'Надя' },
];

// interface DUser {
//     id: number;
//     name: string;
// }

// enum DSortDate {
//     up = "UP",
//     down = "DOWN"
// }

// function sortData<T extends DUser[], Y extends string>(data: T, event: Y): T {
//     switch(event) {
//         case DSortDate.up:
//             return data.sort((a, b) => a.id - b.id);
//         case DSortDate.down:
//             return data.sort((a, b) => b.id - a.id);
//         default:
//             return data;
//     }
// }

// console.log(sortData(data, DSortDate.up));
// console.log(sortData(data, DSortDate.down));

interface DID {
    id: number;
}

function sort<T extends DID>(data: T[], type: 'asc' | 'desc' = 'asc'): T[] {
    return data.sort((a, b) => {
        switch (type) {
            case 'asc':
                return a.id - b.id;
            case 'desc':
                return b.id - a.id;
        }
    })
}

console.log(sort(data, 'desc'));
console.log(sort(data));