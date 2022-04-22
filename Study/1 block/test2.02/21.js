// 21 Написать функцию, которая параметрами принимает значение и массив значений. Вывести количество элементов массива, которые равны первому параметру.

const arr2 = [2, 3, 6, 3, 5, 4, 6, 8, 9, 12, 13, 53];

const testFunc = (val, arr) => {
    let result = []; 
    
    arr.forEach(element => {
        if(element > val) {
            result.push(element)
        }
    });

    return result.length
}

const x = testFunc(6, arr2);
console.log(x)