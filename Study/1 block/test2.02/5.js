// 5 Написать функцию, которая параметрами принимает значение и массив значений. Вывести массив индексов элементов, которые равны заданному значению.

const arr1 = [1, 3, 5, 6, 3, 5, 12, 5, 76, 43];

const testFunc = (arr, val) => {
    const result = []; 

    arr.forEach((element, i) => {
        if(element === val) {
            result.push(i)
        }
    });
    
    return result;
}

const x = testFunc(arr1, 5);
console.log(x)