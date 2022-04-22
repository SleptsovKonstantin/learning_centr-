// 29

const obj = {
    name: 'test',
    age: 25,
    weight: 65,
    height: 165
}

const multiplication = (obj1) => {
    let result = {};
    for (key in obj1) {
      
        if(obj1[key] / 2 >= 0 || obj1[key] / 2 <= 0) {
            result[key] = obj1[key] * 2
        }else{
            result[key] = obj1[key]  
        }

    }

    return result
}

console.log(multiplication(obj));

