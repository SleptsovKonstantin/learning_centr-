// 6 Написать функцию, которая параметром принимает массив элементов. Отобрать массив с нечетными элементами. Вернуть массив со значениями, которые отсутствуют в получившемся массиве.

const arr1 = [1, 3, 5, 6, 3, 5, 12, 5, 76, 43];

const testFunc = (arr) => {
    const result = []; 

    arr.forEach(element => {
        if(element % 2 == 1) {
            result.push(element)
        }
    });
    
    return result;
}

const x = testFunc(arr1);
console.log(x)