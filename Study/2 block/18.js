// 18

const check = (str) => {
    let flag; 
     
    if(str.includes('.html', -5)){
        flag = 'true'
    }else{
        flag = 'false'
    }

    return flag
}

console.log(check('http://localhost.html'));