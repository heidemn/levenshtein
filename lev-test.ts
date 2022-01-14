import {lev} from './lev';

function levTest(a: string, b: string): void {
    console.log(`lev(${a}, ${b}) = ${lev(a, b)}`);
}

levTest('Hello', 'Hello');
levTest('Hello', 'Hell');
levTest('Hello', 'Hel');
levTest('Hello', 'H');
levTest('Hello', '');

levTest('Hello', 'Helo');
levTest('Hello', 'Heo');
levTest('Hello', 'eo');
levTest('Hello', 'e');
