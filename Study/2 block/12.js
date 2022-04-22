const collection = [
      {firstName: 'Test', lastName: 'Test1', age: 34},
      {firstName: 'Text', lastName: 'Text1', age: 20},
      {firstName: 'User', lastName: 'User1', age: 87}
    ];
    
    
    const func = (arr, key, value) => {
    
        arr.forEach(element => {
            element[key] = value
        });
    
        return arr
    }
    
    console.log(func(collection, 'age', 32));
    
     Вывод
    [
      {firstName: 'Test', lastName: 'Test1', age: 32},
      {firstName: 'Text', lastName: 'Text1', age: 32},
      {firstName: 'User', lastName: 'User1', age: 32}
    ]
    