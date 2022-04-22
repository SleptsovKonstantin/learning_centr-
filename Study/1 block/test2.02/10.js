// 10 Написать функцию, которая параметром принимает массив. Функция возвращает true, если хотя бы 1 значение положительное, иначе false. И вернуть массив положительных значений.

const arr2 = [2, 4, 5, 6, 8];

const testFunc = (arr) => {
    let flag = false; 

    for (let k = 0; k < arr.length; k++) {
        
        if(arr[k] % 2 == 1 ) {
            flag = true
        }
    }
    return flag;
}

const x = testFunc(arr2);
console.log(x)
