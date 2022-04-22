const newArr = [1, 1, 1, 4, 1, 2, 2, 4, 6, 5, 6, 2323, 34, 3];

const test = (arr) => {
  const uniq = _.uniq(arr)
  return uniq
};

console.log(test(newArr));