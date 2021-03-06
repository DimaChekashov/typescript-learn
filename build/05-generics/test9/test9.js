"use strict";
// Необходимо написать функцию сортировки любых
// объектов, которые имеют id по убыванию и по возрастанию
var data = [
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Надя' },
];
function sort(data, type) {
    if (type === void 0) { type = 'asc'; }
    return data.sort(function (a, b) {
        switch (type) {
            case 'asc':
                return a.id - b.id;
            case 'desc':
                return b.id - a.id;
        }
    });
}
console.log(sort(data, 'desc'));
console.log(sort(data));
