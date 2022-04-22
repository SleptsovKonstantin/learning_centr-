// 24

const arr = [
  {name: 'test', age: 34, country: 'RF'},
  {name: 'test2', age: 12, country: 'RF'},
  {name: 'test1', age: 54, country: 'RF'}
];

const func = (array, val, val1) => {
    const result = [];

    array.forEach(element => {
        if(element.age > val1 && element.country === val) {
            result.push(element)
        }
    });

    return result
}

console.log(func(arr, 'RF', 18))

// Output:
// [{name: 'test', age: 34, country: 'RF'}, {name: 'test1', age: 54, country: 'RF'}]
