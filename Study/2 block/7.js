// 7


const arr1 = [3, 6, 1, 8, 3, 6, 3, 6, 3, 6];
const arr2 = [1, 4, 2, 4];
const arr3 = [6, 3, 2, 8, 1];

const testFunc = (array1, array2, array3) => {
    let result = [];
    let count = 0;

    array1.forEach((el1) => {
        console.log('++++++++++first array - value:',el1);
        for(let i = 0, j = 0; i < array2.length; i++) {
            console.log(array2[i]);
            if(el1 == array2[i] ) {
                count++;
            } 
            console.log('c', count);           
        }
        

        for(let j = 0; j < array3.length; j++) {
            console.log(array3[j]);
            if(el1 === array3[j]){
                count++;
            }
            console.log('c2', count);
        }

        if(count === 2) {
            count = 0;
            result.push(el1)
        }else{
            count = 0
        }
        
        
                  
    });

    return result;
}

console.log(testFunc(arr1, arr2, arr3));