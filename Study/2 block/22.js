// 22

const search = (str) => {
    const result = [];

    for(let i = 0; i < str.length; i++) {
        if (str[i] === str.slice(-1)) {
            result.push(i)
        }
    }

    return result;
}

console.log(search('test education part'))