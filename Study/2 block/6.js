// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.


const testFunc = (arr) => {
    const result = [];
    let flag = 0;
    let i = 0;

    do {
        result.push(arr[i]);
        i++;
    } while((flag += arr[i]) < 10);

    return result.length;
}

const arr1 = [4, 1, 3, 4, 2, 4, 6, 7, 8, 3, 2];
const t = testFunc(arr1);
console.log(t);



// Input:
// [4, 1, 3, 4, 2, 4, 6, 7, 8, 3, 2]

// Output:
// 4