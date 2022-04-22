// 17 Написать функцию, которая параметром принимает массив элементов. Отобрать массив с четными элементами. Вернуть массив со значениями, которые отсутствуют в получившемся массиве.

const arr2 = [2, 3, 6, 3, 5];

const testFunc = (arr) => {
    const result =[];
    
    arr.forEach(element => {
        if(element % 2 == 1) {
            result.push(element)
        }
    });

    return result;
}

const x = testFunc(arr2);
console.log(x)