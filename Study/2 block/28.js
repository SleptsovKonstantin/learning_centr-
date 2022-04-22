// 28

const inversion = (arr) => {
    const result = [];

    for(let i = arr.length - 1; i >= 0 ; i--) {
        result.push(arr[i])
    }

    
    return result
}

console.log(inversion([6, 2, 9, 1, 7, 4, 7]));

