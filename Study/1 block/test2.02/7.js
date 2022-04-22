// 7 Написать функцию, которая принимает 2 аргумента: объект и массив с объектами. Необходимо вывести массив объектов, в котором все объекты совпадают с объектом первого аргумента функции

const obj1 = {
        name:'Ivan', 
        age:18 
};

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
        age:18
        },
        {
        name:'Andruuuuuha', 
        age: 24
        }
    ];

const testFunc = (arr, obj) => {
    const result = []; 

    arr.forEach(element => {
        if(element.name === obj.name && element.age === obj.age) {
            result.push(element)
        }
    });
    
    return result;
}

const x = testFunc(collectionArr, obj1);
console.log(x)