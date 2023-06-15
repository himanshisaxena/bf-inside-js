'use strict';

console.log('-- begin --');

let x = 0;

let y = ++x;
//   assign x to the value of 0.  ++x is executed, x ++ 1, then x = 1. 
//reasign  value of x is then assigned to the variable y, so y =1.
console.assert(x === 1, 'Test 1 x'); // assign x // read x
console.assert(y === 1, 'Test 1 y'); // assign y // read y


x = y--;
// y is assigned to the value of 1. y-- is executed, y (1) is assigned to x, y -- = 1.  x = 1 and y = 0.
console.assert(x === 1, 'Test 2 x'); //read x //assign x
console.assert(y === 0, 'Test 2 y'); // read y //assign y


// x is assigned to the value of 1. x++ is executed, the value of x(1) is assigned to z, x ++1.  x = 2, y =0, and z holds the original value of x(1).
let z = x++;
console.assert(x === 2, 'Test 3 x');//read x //assign x
console.assert(y === 0, 'Test 3 y');//read y //assign y
console.assert(z === 1, 'Test 3 z');//read z //assign z


// x =2. --x = 1 and returns x=1. --x is exceuted (x=1), the value of y =1

y = --x;
console.assert(x === 1, 'Test 4 x');
console.assert(y === 1, 'Test 4 y');
console.assert(z === 1, 'Test 4 z');

console.log('-- end --');