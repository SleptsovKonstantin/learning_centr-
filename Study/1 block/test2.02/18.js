// 18 Написать функцию, которая параметрами принимает: массив объектов, название ключа. Функция возвращает элемент со свойством, которого значение максимальное.
// не решил 
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

const testFunction = (arr, key) => {
const result = {};

arr.forEach(element => {
    element[key]; 
    console.log(element[key]);
    
});

return result;
}

const x = testFunction(collectionArr, 'age');
console.log(x)