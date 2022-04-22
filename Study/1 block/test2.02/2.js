// 2 Написать функцию, которая параметром принимает массив. Функция возвращает индекс максимального элемента.

const arr1 = [1, 3, 5, 6, 3, 5, 12, 5, 76, 43];

const testFunc = (arr) => {
    let index = -1; 

    for(let k = 0; k < arr.length; k++) {
        index = k;
    }

    return index
}

const x = testFunc(arr1);
console.log(x)