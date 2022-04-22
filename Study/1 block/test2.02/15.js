// 15 Написать функцию, которая параметрами принимает: несколько массивов. Функция возвращает один массив со всеми элементами этих массивов, исключая повторения.

const arr1 = [4, 6, 2, 7, 8, 4 ];
const arr2 = [2, 43, 6, 2, 7, 8, 4,];
const arr3 = [4, 6, 2, 7, 8, 4, 3, 5, 8, 87];

// объединяет в один массив
const testFunction = (...array) => {
    let test = [...array[0], ...array[1], ...array[2]];

    return test;
}

//  не решил. должна быть функция убирающая повторения из одного массива 
const repeat = (arr) => {
    const changes = [];
    let i = 0; 
    let k = 0;

    arr.forEach(element => {
        if(element !== changes[i]) {
            changes.push(element)
        }else{

        }
    });

    return changes;
}


const t = testFunction(arr1, arr2, arr3)
console.log(t)