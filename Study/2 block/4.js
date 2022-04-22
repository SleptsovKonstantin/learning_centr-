// Вернуть true, если хоть одно значение в массиве "положительное"

const arr2 = [5, 3, -6, 7, 2, -7, 8, -2, 5];

const testFunc = (arr) => {
    let flag = false; 

    for (let k = 0; k < arr.length; k++) {
        if(arr[k] > 0 ) {
            flag = true
        }
    }
    return flag;
}

const x = testFunc(arr2);
console.log(x)



// Input:
// [5, 3, -6, 7, 2, -7, 8, -2, 5]

// Output:
// true

// Input:
// [-5, -3, -6, -7, -2, -7, -8, -2, -5]

// Output:
// false