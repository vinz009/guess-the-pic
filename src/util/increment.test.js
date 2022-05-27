
import increment from './increment.js';

test('Input is 3 should equal to 0', () => {
	expect(increment(3)).toEqual(1);
});

test('Input number 1 should equal to 2', () => {
	expect(increment(1)).toEqual(2);
});

