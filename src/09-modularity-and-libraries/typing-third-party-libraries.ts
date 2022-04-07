import { toJson } from 'really-relaxed-json';
const rjson = '[one two three]';
const json = toJson(rjson);

console.log(json);