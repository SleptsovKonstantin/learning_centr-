// 23

const deleteVal = (arr, arr1) => {
    
    arr1.sort((a, b) => b - a);
    

    for(let i = 0; i < arr1.length; i++) {
        let w = arr1[i]
        arr.splice(w, 1);
    }
    return arr
}

console.log(deleteVal([5, 2, 8, 6, 1, 9, 3, 6, 3, 7, 1], [2, 5, 1]));
// Output:
// [5, 6, 1, 3, 6, 3, 7, 1]