// 3.1 returns the number of elements in an array

// const func = (massive) => {
//     let lenght = 0;

//     massive.forEach(element => {
//         lenght++;
//     });

// return lenght;
// }

// const elements = [4, 6, 2, 7, 8, 4];
// const result = func(elements);
// console.log(result);

// 3.2 

// const testFunction = (array, index) => {
//     const newArr =[];

//     array.forEach(value => {
//         if (value > index) newArr.push(value);
//     });

//     return newArr;
// }


// const elements = [4, 6, 2, 7, 8, 4];
// const t = testFunction(elements, 4);
// console.log(t)

// 3.3

// const testFunction = (array, index) => {
//     const newArr =[];
    
//     array.forEach(value => {
//         if (value > index) newArr.push(value);
//     });
        
//     return lenghtFunc(newArr);
// }

// const lenghtFunc = (arr) => {
//     let count = 0;

//     arr.forEach((value, index) => {
//         count = index + 1;
//     });

//     return count;
// }

// const elements = [4, 6, 2, 7, 8, 4];
// const t = testFunction(elements, 4);
// console.log(t)

// 3.4

// const testFunction = (arr, index) => {
//     let newArr = [];

//     arr.forEach((value, i) => {
//         if (value < index) {
//             newArr.push(i)
//           }
        
//     });

//     return newArr;
// }

// const elements = [4, 6, 2, 7, 8, 4];
// const t = testFunction(elements, 7);
// console.log(t)

// 3.5

// const testFunction = (arr, value) => {
//     let number = -1;

//     arr.forEach((element, i) =>{
//         if (element === value)
//         number = i;
//     });

//     return number
// } 

// const elements = [4, 6, 2, 7, 8, 4, 1, 32, 45, 54, 2, 43, 54, 56, 3, 5, 8, 87];
// const t = testFunction(elements, 7);
// console.log('index:', t)

// 3.6

// const collectionArr = [
//     {
//         name: 'Kostya',
//         age: 18 
//     },
//     {
//         name:'Valera', 
//         age: 18
//     },
//     {
//         name:'Ivan', 
//         age:53
//     },
//     {
//         name:'Andruuuuuha', 
//         age: 24
//     }
// ];

// const testFunction = (arr, val) => {
//     arr.forEach(element => {
//         if (element.name === val) 
//         console.log(element)
//     });
// };

// const t = testFunction(collectionArr, 'Ivan');
// console.log(t)

// 3.7

// const testFunction = (arr, val, val2) => {
//     let newArr = [];

//     arr.forEach(value => {
//         if (value > val || value > val2)
//         // newArr = value;
//         console.log(value)
//     })
//     // return newArr;
// }

// const t = testFunction(elements, 8, 20);
// console.log(t)

// 3.8

// const testFunction = (arr, val1, val2) => {
//     const newArr = [];
//     arr.forEach(element => {
//         if (element.name === val1 || element.age === val2)
//         newArr.push(element)
//     });
//     return newArr
// }

// const t = testFunction(collectionArr, 'Kostya', 24);
// console.log(t)

//  3.9 

// const testFunction = (arr, val) => {
//     const newArr = [];
//     arr.forEach(item => {
//         if (item !== val) {
//             newArr.push(item)
//         }
//     });
//     return newArr;
// }

// const t = testFunction(elements, 4);
// console.log(t)

// 3.10

// const testFunction = (arr, val1, val2) =>{
//     let result = false;
//     arr.forEach(item => {
//         if(item.name === val1 || item.age === val2){
//             result = true
//         }else{
//             result = false;
//             return result;
//         }

//     });
//     return result;
// }

// const t = testFunction(collectionArr, 'Ivan', 18)
// console.log(t)

// 3.11

// const testFunction = (arr, val1, val2) =>{
//     let result = false;

//     arr.forEach(item => {
//         if(item.name === val1 || item.age === val2) {
//         result = true
//         };
//     });    
//     return result;
// }
    
// const t = testFunction(collectionArr, 'Ivan', 18)
// console.log(t)

// 3.12

// const testFunction = (arr, val) => {
//     let rusult = false;

//     arr.forEach(item => {
//         if (item === val){
//             result = true;
//             return result;
//         }
//     });
//     return result;
// }

// const t = testFunction(elements,32)
// console.log(t)

// 3.13

// const testFunction = (arr, val) => {
//     const newArr = [];

//     arr.forEach(item => {
//         if (item.name === val || item.age === val) {
//             newArr.push(item)
//         }
//     });
//     return newArr;
// }

// const testFunction = (arr, val) => {
//     const newArr = [];

//     arr.forEach(item => {
//        newArr.push(item[val])
//     });
//     return newArr;
// }

// const t = testFunction(collectionArr, 'age')
// console.log(t)

// 3.14

// const testFunction = (arr) => {
//     let max = arr[0];

//     arr.forEach(item => {
//         if(item.age > max.age) {
//             max = item
//         }

//     });
//     return max;
// }

// const testFunction = (arr) => {
//     let min = arr[0];

//     arr.forEach(item => {
//         if(item.age < min.age) {
//             min = item
//         }

//     });
//     return min;
// }


// const t = testFunction(collectionArr)
// console.log(t)

// 3.15

// const arr1 = [4, 6, 2, 7, 8, 4, 1, 32, 45, 54, 2, 43, 54, 56, 3, 5, 8, 87];
// const arr2 = [4, 6, 2, 7, 8, 4, 1, 32, 45, 54, 2, 43, 54, 56, 3, 5, 8, 87];
// const arr3 = [4, 6, 2, 7, 8, 4, 1, 32, 45, 54, 2, 43, 54, 56, 3, 5, 8, 87];

// const testFunction = (...array) => {
//     let test = [...array[0], ...array[1], ...array[2],];

//     return test;
// }

// const testFunction = (...array) => {
//     let test = [];

//     console.log(array)

//     array.forEach(arr => arr.forEach(item => test.push(item)));

//     return test;
// }


// const t = testFunction(arr1, arr2, arr3)
// console.log(t)

// 3.16


// const r = {
//     name: 'Kostya',
//     age: 18 
// }

// const testFunction = (objectVal, keyVal) => {
//     const keys = [];

//     for (let key in objectVal) {
//         keys.push(key)
//     }
    
//     let flag = false;
//     keys.forEach(item => {
//         if(item === keyVal) flag = true;
 
//     })
//     return flag ? "Exist" : "NO Exist"
// }

// console.log(testFunction(r, 'age'))

// 3.17

// const testFunction = (arrayVal) => {
//     // let arrayCopy = [...arrayVal];
//     const arrayCopy = arrayVal;
//     console.log('arrayCopy', arrayCopy)
//     console.log('arrayVal', arrayVal)
//     arrayCopy[5] = 1505;
//     console.log('arrayCopy', arrayCopy)
//     return arrayCopy
// }


// console.log(testFunction(arr1))

// 3.18

// const massive = [1, 2, 3, 4, false, null, undefined, 0, NaN, "", 123, 6, 7, 9];

// const exception = (arr) => {
//     let mas = [];

//     arr.forEach(item => {
//         if(item) {
//             mas.push(item)
//         }
//     })

//     return mas;
// }

// console.log(exception(massive))

// 3.19

// const moveElement = (arr,from,to) => {
//     const temp = arr[to];
//     arr[to] = arr[from];
//     arr[from] = temp;
//     return arr;
// }

// const arrr = [1, 2, 3, 4, 5, 6, 7];
// const t = moveElement(arrr, 5 , 1);
// console.log(t)


