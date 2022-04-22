// 11 Написать функцию, которая принимает 3 аргумента: 2 значения и массив со значениями. Необходимо вывести измененный массив значений, в котором последнее вхождение первого аргумента заменено на последний аргумент

const arr2 = [2, 12, 4, 5, 6, 12, 8];

const testFunc = (val1, val2, arr) => {
    let result = [];
    const intermediate = [];

    arr.forEach((element, i) => {
        if(element === val1) {
            intermediate.push(i)
            console.log(intermediate)
        }    
    });

    let x = intermediate[this.length+1];
    result = arr;
    result[x] = val2;
    return result;
}

const x = testFunc(12, 20, arr2 );
console.log(x)