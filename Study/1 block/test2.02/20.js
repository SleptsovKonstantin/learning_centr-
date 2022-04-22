// 20 Написать функцию, которая параметрами принимает: массив элементов, 1-е значение, 2-е значение. Вернуть массив значений, которые больше эти 2-х параметров.

const arr2 = [2, 3, 6, 3, 5, 4, 6, 8, 9, 12, 13, 53];

const testFunc = (arr, val1, val2) => {
    const result = [];

    arr.forEach(item => {
        if(item > val1 && item > val2) {
            result.push(item)
        }
    })

    return result
}

const x = testFunc(arr2, 4, 7);
console.log(x)