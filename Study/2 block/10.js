// Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру).

const removeDuplicates = (arr) => {
    
    const result = [];
    const r = arr.length;

    if(typeof arr ===  Number) {

        for(let i = 0; i < r; i++) {
            let search = result.indexOf(arr[i]);
        
            if(search === -1) {
                result.push(arr[i])
            }
        }

    }else{

        for(let i = 0; i < r; i++) {
            let registr = arr[i].toString().toLowerCase();
            let search = result.indexOf(registr);
        
            if(search === -1) {
                result.push(registr)
            }
        }
    }
    
    return result;
}

const w = [4, 7, 1, 9, 6, 8, 4, 6, 3, 6];
const e = ['text', 'education', 'part', 'Text'];
console.log(removeDuplicates(e))
