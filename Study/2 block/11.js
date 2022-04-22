const collection = [
        {firstName: 'Test', lastName: 'Test1', age: 34},
        {firstName: 'Text', lastName: 'Text1', age: 20},
        {firstName: 'User', lastName: 'User1', age: 87}
    ];
    
    
    const func = (arr) => {
        const result = [];
    
        arr.forEach(element => {
    
            element.fullName = element.firstName + ' ' + element.lastName;
            delete element.firstName;
            delete element.lastName;
            
            let x = {};
            x.fullName = element.fullName;
            x.age = element.age
           
            result.push(x);
            console.log(element);
        });
    
        return result
    }
    
    console.log(func(collection));
    
    //  Вывод
    // [
    //     {fullName: 'Test Test1', age 34},
    //     {fullName: 'Text Text1', age 20},
    //     {fullName: 'User User1', age 87},
    //   ]