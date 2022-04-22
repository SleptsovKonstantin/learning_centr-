const newArr = ['a', 'b', 'c', 'd'];

const test = (arr, val) => {
  let x = _.chunk(arr, val)
  return x
}

console.log(test(newArr, 2));

