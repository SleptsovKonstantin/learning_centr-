// 4 С помощью метода map реализовать получение количества элементов в массиве

const arr1 = [1, 3, 5, 6, 3, 5, 12, 5, 76, 43];

const testFunc = (arr) => {
    let result = 0; 

    arr.map(item => result++);
    
    return result;
}

const x = testFunc(arr1);
console.log(x)