const range = (arg1, arg2, step) => {
        const result = [];
    
        for(let i = arg1; arg1 > arg2 ? i >= arg2 : i <= arg2 ; i = i + step ) {
            result.push(i);
            console.log(i);
        }
    
        return result
    }
    
    // 5, 2, -1
    console.log(range( 4, 16, 2));
    // 4, 16, 2