// 12 Написать функцию, которая параметром принимает массив. Вывести четные значения массива.

const arr2 = [2, 12, 4, 5, 6, 12, 8]

const testFunc = (arr) => {
    let result = [];
    arr.map(item => {
        if(item % 2 === 0){
           result.push(item) 
        }
    })
    return result;
}

const x = testFunc(arr2 );
console.log(x)