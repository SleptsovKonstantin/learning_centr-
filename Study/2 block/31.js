// 31

const testFunc = (arr1, arr2) => {
    const result = [];
    let count = 0;

    arr1.forEach(element => {

        for(let i = 0; i < arr2.length; i++){
            
            if(element == arr2[i]){
                count = 0;
                break;   
            }else{
                count++
            }

            if(count === arr2.length) {
                count = 0;
                result.push(element)
            }
        }
    });

    return result
}

console.log(testFunc([4, 7, 2, 9, 3, 5, 6, 4, 5, 1, 4], [4, 5, 6, 7, 8]));
