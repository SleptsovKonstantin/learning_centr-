// 26

const search = (str1, str2) => {
    let flag = 'false';
    let value = -1;

    if(str1.length > str2.length) {
        value = str1.indexOf(str2)
    }else if(str1.length < str2.length){
        value = str2.indexOf(str1)
    }
    
    if(value >= 0) flag = 'true';

    return flag
}

console.log(search('text education part 2', 'text'));