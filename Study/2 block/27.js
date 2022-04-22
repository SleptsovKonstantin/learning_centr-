// 27

const str1 = 'text education part 2';

const space = (str) => {
    let str2 = ''
    let x = str.split('');
    
    x.forEach(element => {
      str2 += element + ' ' 
    });

    return str2
}

console.log(space(str1));
