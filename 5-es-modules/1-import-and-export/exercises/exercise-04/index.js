debugger;

import { sayHi } from './say-hi.js';

const greeting = sayHi('robin!');

console.assert(greeting === 'Hello robin!', 'Test1');

console.log(greeting);