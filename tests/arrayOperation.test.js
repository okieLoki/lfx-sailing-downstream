const arrayOperation = require('../src/arrayOperation');

describe('arrayOperationFunction', () => {

    it('throws an error if array length is not a multiple of 10', () => {
        expect(() => arrayOperation([1, 2, 3, 4, 5])).toThrow('Array length must be a multiple of 10');
    });

    it('filters the array based on index', () => {
        const inputArray = Array.from({ length: 30 }, (item, idx) => idx + 1);
        const expectedResult = [1, 5, 7, 11, 13, 17, 19, 23, 25, 29];

        expect(arrayOperation(inputArray)).toEqual(expectedResult);
    });
});
