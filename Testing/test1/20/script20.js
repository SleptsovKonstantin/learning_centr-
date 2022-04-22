const arr1 = [1, 2, 4, 3, 7];
const arr2 = [2, 1, 3, 5, 8];

const test = (array1, array2) => {
  const arr = _.union(array1, array2);
  return arr;
};

console.log(test(arr1, arr2));
