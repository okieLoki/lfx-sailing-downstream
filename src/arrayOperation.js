const arrayOperation = (arr) => {

    if (arr.length % 10 !== 0) {
        throw new Error('Array length must be a multiple of 10');
    }

    return arr.filter((item, index) => {
        // considering position = index + 1
        return (index + 1) % 2 && (index + 1) % 3
    })
}

module.exports = arrayOperation;