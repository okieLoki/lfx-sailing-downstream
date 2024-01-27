const arrayOperation = require('./arrayOperation');

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

try {

    const result = arrayOperation(array);
    console.log(result);

} catch (error) {

    console.log(error.message);

}