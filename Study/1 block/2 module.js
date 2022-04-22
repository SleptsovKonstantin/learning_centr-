// 1 task

// const differenceSymbols = (str1, str2) => {
//     const x = str1.split('');
//     const y = str2.split('');

//     let txt1 = [];
//     let w;

//     console.log();
//     if (x.length > y.length) {
//         w = x.length
//     }else{
//         w = y.length
//     } 

//     for (let i = 0; i <= w; i++) {
        
//         if (x[i] !== y[i]) {
//         txt1.push(x[i])
//         };
//     }

//     return txt1.toString();
// }

// const text1 = 'text education part 2';
// const text2 = 'text education';
// const result = differenceSymbols(text1, text2);
// console.log(result); // Выводит ' part 2'









// 2

// const func = (arr1, arr2) => {
//     let object = {};

//     arr1.forEach((item, i) => {
//         const key = item;
//         const value = arr2[i];
//         object[key] = value;
//     });

//     return object;
// }
// const  a = ['name', 'age', 'country'];
// const  b = ['test', 25, 'RF'];
// const result = func(a, b);
// console.log(result);

// Выводит {
//     name: 'test'.
//     age: 25,
//     country: 'RF'
//   }











// 3

// const findCouple = (array, number) => {
//     const result = [];

//     array.forEach(element => {
//         for(let i = 0; i < array.length; i++) {
//             if (element + array[i] === number) {
//                 let arr = new Array(element + ', ' +array[i]);
//                 result.push(arr);
//                 break
//             }
//         }
//     });
    
//     return result;
// }

// const x = [4, 6, 2, 9, 1, 8, 3, 5, 2, 1, 7, 4, 6];
// const y = 10;
// console.log(findCouple(x, y))











// 4

// const arr2 = [5, 3, -6, 7, 2, -7, 8, -2, 5];

// const testFunc = (arr) => {
//     let flag = false; 

//     for (let k = 0; k < arr.length; k++) {
//         if(arr[k] > 0 ) {
//             flag = true
//         }
//     }
//     return flag;
// }

// const x = testFunc(arr2);
// console.log(x)










// 5

// const arr2 = [5, 2, 7, 2, 5, 4, 1, 7, 8, 9, 4, 6, 3];

// const testFunc = (arr, val) => {
//     const result = [];

//     arr.forEach(el => {
//         if(el > val) {
//             result.push(el)
//         }
        
//     });

//     return result;
// }

// const x = testFunc(arr2, 4);
// console.log(x)

// 6

// const testFunc = (arr) => {
//     const result = [];
//     let flag = 0;
//     let i = 0;

//     do {
//         result.push(arr[i]);
//         i++;
//     } while((flag += arr[i]) < 10);

//     return result.length;
// }

// const arr1 = [4, 1, 3, 4, 2, 4, 6, 7, 8, 3, 2];
// const t = testFunc(arr1);
// console.log(t);









// 7


// const arr1 = [3, 6, 1, 8, 3, 6, 3, 6, 3, 6];
// const arr2 = [1, 4, 2, 4];
// const arr3 = [6, 3, 2, 8, 1];

// const testFunc = (array1, array2, array3) => {
//     let result = [];
//     let count = 0;

//     array1.forEach((el1) => {
//         console.log('++++++++++first array - value:',el1);
//         for(let i = 0, j = 0; i < array2.length; i++) {
//             console.log(array2[i]);
//             if(el1 == array2[i] ) {
//                 count++;
//             } 
//             console.log('c', count);           
//         }
        

//         for(let j = 0; j < array3.length; j++) {
//             console.log(array3[j]);
//             if(el1 === array3[j]){
//                 count++;
//             }
//             console.log('c2', count);
//         }

//         if(count === 2) {
//             count = 0;
//             result.push(el1)
//         }else{
//             count = 0
//         }
        
        
                  
//     });

//     return result;
// }

// console.log(testFunc(arr1, arr2, arr3));





// 9

// const a = {test: 8, text: 9};
// const b = {test: 8, text: 9};

// const func = (obj1, obj2) => {
//     let x;
//     if (obj1.test === obj2.test && obj1.text === obj2.text) {
//         x = 'true'
//     }else{
//         x = 'false'
//     }

//     return x
// }

// console.log(func(a, b))










// 10 

// const removeDuplicates = (arr) => {
    
//     const result = [];
//     const r = arr.length;

//     if(typeof arr ===  Number) {

//         for(let i = 0; i < r; i++) {
//             let search = result.indexOf(arr[i]);
        
//             if(search === -1) {
//                 result.push(arr[i])
//             }
//         }

//     }else{

//         for(let i = 0; i < r; i++) {
//             let registr = arr[i].toString().toLowerCase();
//             let search = result.indexOf(registr);
        
//             if(search === -1) {
//                 result.push(registr)
//             }
//         }
//     }
    
//     return result;
// }

// const w = [4, 7, 1, 9, 6, 8, 4, 6, 3, 6];
// const e = ['text', 'education', 'part', 'Text'];
// console.log(removeDuplicates(e))









// 11

// const collection = [
//     {firstName: 'Test', lastName: 'Test1', age: 34},
//     {firstName: 'Text', lastName: 'Text1', age: 20},
//     {firstName: 'User', lastName: 'User1', age: 87}
// ];


// const func = (arr) => {
//     const result = [];

//     arr.forEach(element => {

//         element.fullName = element.firstName + ' ' + element.lastName;
//         delete element.firstName;
//         delete element.lastName;
        
//         let x = {};
//         x.fullName = element.fullName;
//         x.age = element.age
       
//         result.push(x);
//         console.log(element);
//     });

//     return result
// }

// console.log(func(collection));

// //  Вывод
// // [
// //     {fullName: 'Test Test1', age 34},
// //     {fullName: 'Text Text1', age 20},
// //     {fullName: 'User User1', age 87},
// //   ]






// 12

// const collection = [
//   {firstName: 'Test', lastName: 'Test1', age: 34},
//   {firstName: 'Text', lastName: 'Text1', age: 20},
//   {firstName: 'User', lastName: 'User1', age: 87}
// ];


// const func = (arr, key, value) => {

//     arr.forEach(element => {
//         element[key] = value
//     });

//     return arr
// }

// console.log(func(collection, 'age', 32));

//  Вывод
// [
//   {firstName: 'Test', lastName: 'Test1', age: 32},
//   {firstName: 'Text', lastName: 'Text1', age: 32},
//   {firstName: 'User', lastName: 'User1', age: 32}
// ]





// 13

// const range = (arg1, arg2, step) => {
//     const result = [];

//     for(let i = arg1; arg1 > arg2 ? i >= arg2 : i <= arg2 ; i = i + step ) {
//         result.push(i);
//         console.log(i);
//     }

//     return result
// }

// // 5, 2, -1
// console.log(range( 4, 16, 2));
// // 4, 16, 2




// 15

// const str1 = 'test education part 2';

// const testFunc = (str) => {
//     const newAr = [];
//     const result = [];

//     for(let i = 0; i < str.length; i=i+3) {
//         let x = str.substr(i,3)
//         newAr.push(x)
//     }

//     newAr.forEach(item => {
//         let w = item[1] = item[0] + '_' + item[2];
//         result.push(w);
//     })

//     return result.sort()
// }

// console.log(testFunc(str1));







// 16


// const testFunc = (val1, val2, val3) => {
//     let value; 

//     if(val1 % 2 === 0 ) {
//         value = (val1 ** 2) * val2 + val3;

//     }else{
//         value = (val1 ** 3) * val2 + val3; 
//     }

//     console.log(value);

//     return root(value);
// }

// const root = (val) => {
//     let num = Math.sqrt(val)*100;
//     return Math.trunc(num) / 100
// }

// console.log(testFunc(17, 6, 2))





// 17 

// const str = 'text education part 2';

// const upper = (string) => {
//     return newStr = string[0].toUpperCase() + string.slice(1)  
// }


// console.log(upper(str));




// 18

// const check = (str) => {
//     let flag; 
     
//     if(str.includes('.html')){
//         flag = 'true'
//     }else{
//         flag = 'false'
//     }

//     return flag
// }

// console.log(check('http://localhost.html'));





// 19 

// const check = (str) => {
//     let flag = 'true'; 

//     for(let i = 0, k = str.length - 1; i < str.length; i++, k--) {
//       if (str[i] !== str[k]) {
//           console.log(srt[i]);
//           flag = false;
//           break;
//         }
//     }
  
//     return flag;
// }

// console.log(check('testset'))




// 20

// const union = (arr) => {
//     return arr.join('')
// }

// console.log(union([5, 8, 'test', 7, 'b', 789, 'fff']));




// 22

// const search = (str) => {
//     const result = [];

//     for(let i = 0; i < str.length; i++) {
//         if (str[i] === str.slice(-1)) {
//             result.push(i)
//         }
//     }

//     return result;
// }

// console.log(search('test education part'))



// 23

// const deleteVal = (arr, arr1) => {
//     const result = [];

//     for(let i = 0; i < arr1.length; i++) {
//         arr.splice(arr[i], 1);
//         console.log(arr);
//     }
//     return arr
// }

// console.log(deleteVal([5, 2, 8, 6, 1, 9, 3, 6, 3, 7, 1], [2, 5, 1]));
// // Output:
// // [5, 6, 1, 3, 6, 3, 7, 1]





// 24

// const arr = [
//   {name: 'test', age: 34, country: 'RF'},
//   {name: 'test2', age: 12, country: 'RF'},
//   {name: 'test1', age: 54, country: 'RF'}
// ];

// const func = (array, val, val1) => {
//     const result = [];

//     array.forEach(element => {
//         if(element.age > val1 && element.country === val) {
//             result.push(element)
//         }
//     });

//     return result
// }

// console.log(func(arr, 'RF', 18))

// Output:
// [{name: 'test', age: 34, country: 'RF'}, {name: 'test1', age: 54, country: 'RF'}]




// 25 

// const sumStr = (str) => {
//     let arr = str.split('');
//     let sum = 0;

//     arr.forEach(element => {
//         if(element / 2 >= 0) {
//             sum += +element 
//         }
//     });

//     return sum
// }

// console.log(sumStr('test455test786'));




// 26

// const search = (str1, str2) => {
//     let flag = 'false';
//     let value = -1;

//     if(str1.length > str2.length) {
//         value = str1.indexOf(str2)
//     }else if(str1.length < str2.length){
//         value = str2.indexOf(str1)
//     }
    
//     if(value >= 0) flag = 'true';

//     return flag
// }

// console.log(search('text education part 2', 'text'));




// 27

// const str1 = 'text education part 2';

// const space = (str) => {
//     let str2 = ''
//     let x = str.split('');
    
//     x.forEach(element => {
//       str2 += element + ' ' 
//     });

//     return str2
// }

// console.log(space(str1));




// 28

// const inversion = (arr) => {
//     const result = [];

//     for(let i = arr.length - 1; i >= 0 ; i--) {
//         result.push(arr[i])
//     }

    
//     return result
// }

// console.log(inversion([6, 2, 9, 1, 7, 4, 7]));




// 29

// const obj = {
//     name: 'test',
//     age: 25,
//     weight: 65,
//     height: 165
// }

// const multiplication = (obj1) => {
//     let result = {};
//     for (key in obj1) {
      
//         if(obj1[key] / 2 >= 0 || obj1[key] / 2 <= 0) {
//             result[key] = obj1[key] * 2
//         }else{
//             result[key] = obj1[key]  
//         }

//     }

//     return result
// }

// console.log(multiplication(obj));




// 30

// const dublication = (arr) => {
//     const result = [];

//     arr.forEach(element => {
//         result.push(element);
//         result.push(element)
//     });

//     return result
// }

// console.log(dublication([1, 2]));





// 31

// const testFunc = (arr1, arr2) => {
//     const result = [];
//     let count = 0;

//     arr1.forEach(element => {

//         for(let i = 0; i < arr2.length; i++){
            
//             if(element == arr2[i]){
//                 count = 0;
//                 break;   
//             }else{
//                 count++
//             }

//             if(count === arr2.length) {
//                 count = 0;
//                 result.push(element)
//             }
//         }
//     });

//     return result
// }

// console.log(testFunc([4, 7, 2, 9, 3, 5, 6, 4, 5, 1, 4], [4, 5, 6, 7, 8]));




// 32 

// const testFunc = (arr) => {
//     const result = [];
//     let count = 0;

//     arr.forEach(element => {
        
//         for(let i = 0; i < arr.length; i++) {
//             if(element !== arr[i]) {
//                 count++
//             }
//         }

//         if(count === arr.length - 1 ) {
//             result.push(element)
//             count = 0 ;
//         }else{
//             count = 0
//         }
//     });

//     return result
// }

// console.log(testFunc([5, 2, 8, 4, 8, 2, 5, 8, 2, 17, 8, 4, 2, 4, 7, 3]));





// 33

// const obj1 = { 'dog': 6, 'cat': 11 };

// const testFunc = (obj) => {
//     const result = [];

//     for(let key in obj) {
        
//         let arr = new Array (key, obj[key]);
        
//         result.push(arr)
//     }

//     return result;
// }

// console.log(testFunc(obj1));




// 34


