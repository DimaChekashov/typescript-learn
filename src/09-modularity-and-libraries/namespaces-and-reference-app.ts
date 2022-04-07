import run, { A, type MyType } from './module/namespaces-and-reference';
import running from './module/namespaces-and-reference';
import * as all from './module/namespaces-and-reference';
import { Test as CL } from './module/namespaces-and-reference';
import { type MyType2 } from './module/namespaces-and-reference';

run();
new CL();
console.log(A.a);
console.log(all.A.a);