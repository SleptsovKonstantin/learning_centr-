const newArr = [1, 5, 2, 3, 5, 1, 2, 3, 5];

const test = (arr) => {
  let num = null;
  arr.forEach(element => {
    let intemediateVal = 0;
    for(let i = 0; i < arr.length; i++){
      if (arr[i] === element) {
        intemediateVal++
      }
      
    }

    if(intemediateVal%2 === 1) {
      num = element
    }
    
  });


  return num
};

console.log(test(newArr));
