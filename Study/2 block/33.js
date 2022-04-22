// 33

const obj1 = { 'dog': 6, 'cat': 11 };

const testFunc = (obj) => {
    const result = [];

    for(let key in obj) {
        
        let arr = new Array (key, obj[key]);
        
        result.push(arr)
    }

    return result;
}

console.log(testFunc(obj1));

