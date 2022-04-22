// 30

const dublication = (arr) => {
    const result = [];

    arr.forEach(element => {
        result.push(element);
        result.push(element)
    });

    return result
}

console.log(dublication([1, 2]));

