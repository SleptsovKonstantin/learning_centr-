// 14 Написать функцию, которая параметром принимает массив элементов и значение. Функция возвращает true,если в массиве есть это значение, иначе false.

const arr2 = [2, 4, 5, 6, 8];

const testFunc = (arr, val) => {
    let flag = false; 

    for (let k = 0; k < arr.length; k++) {
        
        if(arr[k] === val ) {
            flag = true
        }
    }
    return flag;
}

const x = testFunc(arr2, 5);
console.log(x)