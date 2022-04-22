// 16 Написать функцию, которая параметром принимает массив. Функция возвращает true, если все значения положительные, иначе false.

const arr2 = [1, 3, 5, 3, 5];

const testFunc = (arr) => {
    let flag = false; 

    for (let k = 0; k < arr.length; k++) {
        if(arr[k] > 0) {
            flag = true;
        }else if(arr[k] < 0) {
            flag = false;
            break;
        };
    }
    return flag;
}

const x = testFunc(arr2);
console.log(x)