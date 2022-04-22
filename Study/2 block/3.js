const findCouple = (array, number) => {
    const result = [];

    array.forEach(element => {
        for(let i = 0; i < array.length; i++) {
            if (element + array[i] === number) {
                let arr = new Array(element + ', ' +array[i]);
                result.push(arr);
                break
            }
        }
    });
    
    return result;
}

const x = [4, 6, 2, 9, 1, 8, 3, 5, 2, 1, 7, 4, 6];
const y = 10;
console.log(findCouple(x, y))