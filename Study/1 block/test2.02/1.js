// 1 задача Написать функцию, которая параметрами принимает: массив объектов, объект с минимум 2-ми полями. Вернуть массив объектов, объекты которого, совпадают с объектом из параметром минимум по одному ключу или значению

const collectionArr = [
    {
    name: 'Kostya',
    age: 18 
    },
    {
    name:'Valera', 
    age: 18
    },
    {
    name:'Ivan', 
    age:53
    },
    {
    name:'Andruuuuuha', 
    age: 24
    }
];

const obj1 = {
    name:'Ivan', 
    age:18 
};

const testFunc = (arr, obj) => {
    let result = [];

    arr.forEach(element => {
        if(element.name === obj.name || element.age === obj.age) {
            result.push(element)
        }
    });

    return result;
}

const x = testFunc(collectionArr, obj1);
console.log(x)