// 9 Написать функцию, которая параметрами принимает: массив объектов, ключ, значение. 
// Функция возвращает массив объектов, у которых по заданному ключу совпадает заданное значение. 
// Но в массиве хранятся объекты у которых может отсутствовать данное свойство или быть вообще пустым объектом.

const collectionArr = [
    {
    firstName: 'Kostya',
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
    lastName: 24
    },
    {},
    {
    coutry:'RF'
    }
];

const testFunc = (arr, key, val) => {
const result = [];

arr.map(item => {
    if(item[key] === val) {
        result.push(item)
    }; 

});

return result;
}

const x = testFunc(collectionArr, 'name', 'Valera');
console.log(x)
