// 15

const str1 = 'test education part 2';

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


const testFunc = (str) => {
    const newAr = [];
    const result = [];

    for(let i = 0; i < str.length; i=i+3) {
        let x = str.substr(i,3)
        newAr.push(x)
    }

    newAr.forEach(item => {
        let w = item[1] = item[0] + '_' + item[2];
        result.push(w);
    })

    return bubbleSort(result)
}

console.log(testFunc(str1));



