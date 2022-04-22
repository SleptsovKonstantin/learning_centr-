const array = [];

const full = (arr) => {
  let val = 'x';
  let i = 0; 
  while (i<10) {
    arr.push(val);
    val = val + 'x';
    i++
  }
  return arr
}

console.log(full(array));