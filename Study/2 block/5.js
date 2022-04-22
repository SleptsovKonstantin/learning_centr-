const arr2 = [5, 2, 7, 2, 5, 4, 1, 7, 8, 9, 4, 6, 3];

const testFunc = (arr, val) => {
    const result = [];

    arr.forEach((el, index) => {
        if(el > val) {
            result.push(index)
        }
        
    });
    
    const i = result.length -1 ;
    return result[i];
}

const x = testFunc(arr2, 4);
console.log(x)