// 32 
const bubbleSort = arr => {
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        let wasSwap = false;
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    return arr;
};

const testFunc = (arr) => {
    const result = [];
    let count = 0;

    arr.forEach(element => {
        
        for(let i = 0; i < arr.length; i++) {
            if(element !== arr[i]) {
                count++
            }
        }

        if(count === arr.length - 1 ) {
            result.push(element)
            count = 0 ;
        }else{
            count = 0
        }
    });

    return bubbleSort(result)
}

console.log(testFunc([5, 2, 8, 4, 8, 2, 5, 8, 2, 17, 8, 4, 2, 4, 7, 3]));


