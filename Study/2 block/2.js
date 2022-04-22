// В функцию подается 2 массива: 1 ключи, 2 значения. Сформировать объект.

const func = (arr1, arr2) => {
    let object = {};

    arr1.forEach((item, i) => {
        const key = item;
        const value = arr2[i];
        object[key] = value;
    });

    return object;
}
const  a = ['name', 'age', 'country'];
const  b = ['test', 25, 'RF'];
const result = func(a, b);
console.log(result);

// Выводит {
//     name: 'test'.
//     age: 25,
//     country: 'RF'
//   }