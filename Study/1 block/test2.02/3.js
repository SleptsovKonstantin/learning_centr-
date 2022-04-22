// 3 Написать функцию, которая параметром принимает массив элементов. Функция возвращает true, если все элементы нечетные, иначе false.

const arr1 = [1, 3, 5, 6, 3, 5, 12, 5, 76, 43];
const arr2 = [1, 3, 5, 3, 5];

const testFunc = (arr) => {
    let flag = false; 

    for (let k = 0; k < arr.length; k++) {
        if(arr[k] % 2 == 1 ) {
            flag = true;
        }else if(arr[k] % 2 == 0 ) {
            flag = false;
            break;
        };
    }
    return flag;
}

const x = testFunc(arr2);
console.log(x)