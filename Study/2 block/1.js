// Даны две строки. Сравнить строки. Вывести символы большей строки, на количество которых отличается.

const differenceSymbols = (str1, str2) => {
    const x = str1.split('');
    const y = str2.split('');

    let txt1 = [];
    let w;

    console.log();
    if (x.length > y.length) {
        w = x.length
    }else{
        w = y.length
    } 

    for (let i = 0; i <= w; i++) {
        
        if (x[i] !== y[i]) {
        txt1.push(x[i])
        };
    }

    return txt1.join('');
}

const text1 = 'text education part 2';
const text2 = 'text education';
const result = differenceSymbols(text1, text2);
console.log(result); // Выводит ' part 2'
