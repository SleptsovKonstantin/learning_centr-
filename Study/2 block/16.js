// 16


const testFunc = (val1, val2, val3) => {
    let value; 

    if(val1 % 2 === 0 ) {
        value = (val1 ** 2) * val2 + val3;

    }else{
        value = (val1 ** 3) * val2 + val3; 
    }

    console.log(value);

    return root(value);
}

const root = (val) => {
    let num = Math.sqrt(val)*100;
    return Math.trunc(num) / 100
}

console.log(testFunc(17, 6, 2))
