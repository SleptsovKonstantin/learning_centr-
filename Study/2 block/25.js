// 25 

const sumStr = (str) => {
    let arr = str.split('');
    let sum = 0;

    arr.forEach(element => {
        if(element / 2 >= 0) {
            sum += +element 
        }
    });

    return sum
}

console.log(sumStr('test455test786'));

