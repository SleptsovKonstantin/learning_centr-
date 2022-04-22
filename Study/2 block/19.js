// 19 

const check = (str) => {
    let flag = 'true'; 

    for(let i = 0, k = str.length - 1; i < str.length; i++, k--) {
      if (str[i] !== str[k]) {          
          flag = false;
          break;
        }
    }
  
    return flag;
}

console.log(check('chhc'))