// Вывести сообщение равны ли 2 объекта

const a = {test: 8, text: 9};
const b = {test: 8, text: 9};

const func = (obj1, obj2) => {
    let x;
    if (obj1.test === obj2.test && obj1.text === obj2.text) {
        x = 'true'
    }else{
        x = 'false'
    }

    return x
}

console.log(func(a, b))



// Input:
// const a = {test: 8, text: 9};
// const b = {test: 8, text: 9};
// func(a, b)

// Output:

// true