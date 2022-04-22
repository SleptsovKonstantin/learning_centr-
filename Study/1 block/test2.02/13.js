// 13 Написать функцию, которая параметрами принимает: массив элементов, 1-е значение, 2-е значение. Вернуть массив индексов элементов, значения которых совпадают с параметрами.

const arr2 = [2, 12, 4, 5, 6, 12, 20];

const testFunc = (arr, val1, val2) => {
    const result = [];

    arr.forEach((element,i) => {
        if(element === val1 || element === val2) {
            result.push(i)
        }
    });

    return result;
}

const x = testFunc(arr2, 12, 20);
console.log(x)
