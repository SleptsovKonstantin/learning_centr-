// 1 задача Написать функцию, которая параметрами принимает: массив объектов, объект с минимум 2-ми полями. Вернуть массив объектов, объекты которого, совпадают с объектом из параметром минимум по одному ключу или значению

// const collectionArr = [
//     {
//     name: 'Kostya',
//     age: 18 
//     },
//     {
//     name:'Valera', 
//     age: 18
//     },
//     {
//     name:'Ivan', 
//     age:53
//     },
//     {
//     name:'Andruuuuuha', 
//     age: 24
//     }
// ];

// const obj1 = {
//     name:'Ivan', 
//     age:18 
// };

// const testFunc = (arr, obj) => {
//     let result = [];

//     arr.forEach(element => {
//         if(element.name === obj.name || element.age === obj.age) {
//             result.push(element)
//         }
//     });

//     return result;
// }

// const x = testFunc(collectionArr, obj1);
// console.log(x)

// 2 Написать функцию, которая параметром принимает массив. Функция возвращает индекс максимального элемента.

// const arr1 = [1, 3, 5, 6, 3, 5, 12, 5, 76, 43];

// const testFunc = (arr) => {
//     let index = -1; 

//     for(let k = 0; k < arr.length; k++) {
//         index = k;
//     }

//     return index
// }

// const x = testFunc(arr1);
// console.log(x)

// 3 Написать функцию, которая параметром принимает массив элементов. Функция возвращает true, если все элементы нечетные, иначе false.

// const arr1 = [1, 3, 5, 6, 3, 5, 12, 5, 76, 43];
// const arr2 = [1, 3, 5, 3, 5];

// const testFunc = (arr) => {
//     let flag = false; 

//     for (let k = 0; k < arr.length; k++) {
//         if(arr[k] % 2 == 1 ) {
//             flag = true;
//         }else if(arr[k] % 2 == 0 ) {
//             flag = false;
//             break;
//         };
//     }
//     return flag;
// }

// const x = testFunc(arr2);
// console.log(x)

// 4 С помощью метода map реализовать получение количества элементов в массиве

// const arr1 = [1, 3, 5, 6, 3, 5, 12, 5, 76, 43];

// const testFunc = (arr) => {
//     let result = 0; 

//     arr.map(item => result++);
    
//     return result;
// }

// const x = testFunc(arr1);
// console.log(x)

// 5 Написать функцию, которая параметрами принимает значение и массив значений. Вывести массив индексов элементов, которые равны заданному значению.

// const arr1 = [1, 3, 5, 6, 3, 5, 12, 5, 76, 43];

// const testFunc = (arr, val) => {
//     const result = []; 

//     arr.forEach((element, i) => {
//         if(element === val) {
//             result.push(i)
//         }
//     });
    
//     return result;
// }

// const x = testFunc(arr1, 5);
// console.log(x)

// 6 Написать функцию, которая параметром принимает массив элементов. Отобрать массив с нечетными элементами. Вернуть массив со значениями, которые отсутствуют в получившемся массиве.

// const arr1 = [1, 3, 5, 6, 3, 5, 12, 5, 76, 43];

// const testFunc = (arr) => {
//     const result = []; 

//     arr.forEach(element => {
//         if(element % 2 == 1) {
//             result.push(element)
//         }
//     });
    
//     return result;
// }

// const x = testFunc(arr1);
// console.log(x)

// 7 Написать функцию, которая принимает 2 аргумента: объект и массив с объектами. Необходимо вывести массив объектов, в котором все объекты совпадают с объектом первого аргумента функции

// const obj1 = {
//         name:'Ivan', 
//         age:18 
// };

// const collectionArr = [
//         {
//         name: 'Kostya',
//         age: 18 
//         },
//         {
//         name:'Valera', 
//         age: 18
//         },
//         {
//         name:'Ivan', 
//         age:18
//         },
//         {
//         name:'Andruuuuuha', 
//         age: 24
//         }
//     ];

// const testFunc = (arr, obj) => {
//     const result = []; 

//     arr.forEach(element => {
//         if(element.name === obj.name && element.age === obj.age) {
//             result.push(element)
//         }
//     });
    
//     return result;
// }

// const x = testFunc(collectionArr, obj1);
// console.log(x)

// 8 Написать функцию, которая параметром принимает массив. Функция возвращает true, если хотя бы 1 значение положительное, иначе false. И вернуть массив положительных значений.

// const arr2 = [-1, -3, 5, -3, -5];

// const testFunc = (arr) => {
//     let flag = false; 

//     for (let k = 0; k < arr.length; k++) {
//         console.log(arr[k])
//         if(arr[k] > 0 ) {
//             flag = true
//         }
//     }
//     return flag;
// }

// const x = testFunc(arr2);
// console.log(x)

// 9 Написать функцию, которая параметрами принимает: массив объектов, ключ, значение. 
// Функция возвращает массив объектов, у которых по заданному ключу совпадает заданное значение. 
// Но в массиве хранятся объекты у которых может отсутствовать данное свойство или быть вообще пустым объектом.

// const collectionArr = [
//         {
//         firstName: 'Kostya',
//         age: 18 
//         },
//         {
//         name:'Valera', 
//         age: 18
//         },
//         {
//         name:'Ivan', 
//         age:18
//         },
//         {
//         name:'Andruuuuuha', 
//         lastName: 24
//         },
//         {},
//         {
//         coutry:'RF'
//         }
// ];

// const testFunc = (arr, key, val) => {
//     const result = [];

//     arr.map(item => {
//         if(item[key] === val) {
//             result.push(item)
//         }; 

//     });

//     return result;
// }

// const x = testFunc(collectionArr, 'name', 'Valera');
// console.log(x)


// 10 Написать функцию, которая параметром принимает массив. Функция возвращает true, если хотя бы 1 значение положительное, иначе false. И вернуть массив положительных значений.

// const arr2 = [2, 4, 5, 6, 8];

// const testFunc = (arr) => {
//     let flag = false; 

//     for (let k = 0; k < arr.length; k++) {
        
//         if(arr[k] % 2 == 1 ) {
//             flag = true
//         }
//     }
//     return flag;
// }

// const x = testFunc(arr2);
// console.log(x)

// 11 Написать функцию, которая принимает 3 аргумента: 2 значения и массив со значениями. Необходимо вывести измененный массив значений, в котором последнее вхождение первого аргумента заменено на последний аргумент

// const arr2 = [2, 12, 4, 5, 6, 12, 8];

// const testFunc = (val1, val2, arr) => {
//     let result = [];
//     const intermediate = [];

//     arr.forEach((element, i) => {
//         if(element === val1) {
//             intermediate.push(i)
//             console.log(intermediate)
//         }    
//     });

//     let x = intermediate[this.length+1];
//     result = arr;
//     result[x] = val2;
//     return result;
// }

// const x = testFunc(12, 20, arr2 );
// console.log(x)

// 12 Написать функцию, которая параметром принимает массив. Вывести четные значения массива.

// const arr2 = [2, 12, 4, 5, 6, 12, 8]

// const testFunc = (arr) => {
//     let result = [];
//     arr.map(item => {
//         if(item % 2 === 0){
//            result.push(item) 
//         }
//     })
//     return result;
// }

// const x = testFunc(arr2 );
// console.log(x)

// 13 Написать функцию, которая параметрами принимает: массив элементов, 1-е значение, 2-е значение. Вернуть массив индексов элементов, значения которых совпадают с параметрами.

// const arr2 = [2, 12, 4, 5, 6, 12, 20];

// const testFunc = (arr, val1, val2) => {
//     const result = [];

//     arr.forEach((element,i) => {
//         if(element === val1 || element === val2) {
//             result.push(i)
//         }
//     });

//     return result;
// }

// const x = testFunc(arr2, 12, 20);
// console.log(x)

// 14 Написать функцию, которая параметром принимает массив элементов и значение. Функция возвращает true,если в массиве есть это значение, иначе false.

// const arr2 = [2, 4, 5, 6, 8];

// const testFunc = (arr, val) => {
//     let flag = false; 

//     for (let k = 0; k < arr.length; k++) {
        
//         if(arr[k] === val ) {
//             flag = true
//         }
//     }
//     return flag;
// }

// const x = testFunc(arr2, 5);
// console.log(x)

// // 15 Написать функцию, которая параметрами принимает: несколько массивов. Функция возвращает один массив со всеми элементами этих массивов, исключая повторения.

// const arr1 = [4, 6, 2, 7, 8, 4 ];
// const arr2 = [2, 43, 6, 2, 7, 8, 4,];
// const arr3 = [4, 6, 2, 7, 8, 4, 3, 5, 8, 87];

// // объединяет в один массив
// const testFunction = (...array) => {
//     let test = [...array[0], ...array[1], ...array[2]];

//     return test;
// }

// //  не решил. должна быть функция убирающая повторения 
// const repeat = (arr) => {
//     const changes = [];
//     let i = 0; 
//     let k = 0;

//     arr.forEach(element => {
//         if(element !== changes[i]) {
//             changes.push(element)
//         }else{

//         }
//     });

//     return changes;
// }


// const t = testFunction(arr1, arr2, arr3)
// console.log(t)

// 16 Написать функцию, которая параметром принимает массив. Функция возвращает true, если все значения положительные, иначе false.

// const arr2 = [1, 3, 5, 3, 5];

// const testFunc = (arr) => {
//     let flag = false; 

//     for (let k = 0; k < arr.length; k++) {
//         if(arr[k] > 0) {
//             flag = true;
//         }else if(arr[k] < 0) {
//             flag = false;
//             break;
//         };
//     }
//     return flag;
// }

// const x = testFunc(arr2);
// console.log(x)

// 17 Написать функцию, которая параметром принимает массив элементов. Отобрать массив с четными элементами. Вернуть массив со значениями, которые отсутствуют в получившемся массиве.

// const arr2 = [2, 3, 6, 3, 5];

// const testFunc = (arr) => {
//     const result =[];
    
//     arr.forEach(element => {
//         if(element % 2 == 1) {
//             result.push(element)
//         }
//     });

//     return result;
// }

// const x = testFunc(arr2);
// console.log(x)

// 18 Написать функцию, которая параметрами принимает: массив объектов, название ключа. Функция возвращает элемент со свойством, которого значение максимальное.

// const collectionArr = [
//         {
//             name: 'Kostya',
//             age: 18 
//         },
//         {
//             name:'Valera', 
//             age: 18
//         },
//         {
//             name:'Ivan', 
//             age:53
//         },
//         {
//             name:'Andruuuuuha', 
//             age: 24
//         }
// ];

// const testFunction = (arr, key) => {
//     const result = {};

//     arr.forEach(element => {
//         element[key]; 
//         console.log(element[key]);
        
//     });

//     return result;
// }

// const x = testFunction(collectionArr, 'age');
// console.log(x)

// 19 


// 20 Написать функцию, которая параметрами принимает: массив элементов, 1-е значение, 2-е значение. Вернуть массив значений, которые больше эти 2-х параметров.

// const arr2 = [2, 3, 6, 3, 5, 4, 6, 8, 9, 12, 13, 53];

// const testFunc = (arr, val1, val2) => {
//     const result = [];

//     arr.forEach(item => {
//         if(item > val1 && item > val2) {
//             result.push(item)
//         }
//     })

//     return result
// }

// const x = testFunc(arr2, 4, 7);
// console.log(x)

// 21 Написать функцию, которая параметрами принимает значение и массив значений. Вывести количество элементов массива, которые равны первому параметру.

// const arr2 = [2, 3, 6, 3, 5, 4, 6, 8, 9, 12, 13, 53];

// const testFunc = (val, arr) => {
//     let result = []; 
    
//     arr.forEach(element => {
//         if(element > val) {
//             result.push(element)
//         }
//     });

//     return result.length
// }

// const x = testFunc(6, arr2);
// console.log(x)