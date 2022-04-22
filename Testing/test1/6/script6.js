const arr1 = [{ age: 18 }, { age: 35 }, { age: 6 }, { age: 89 }];
const val1 = "age";

const test = (arr, val) => {
  const value = _.pluck(arr, val);
  console.log(value);
  const min = _.min(value);
  console.log(min);
  const filter = arr.filter(obj => obj[val] === min);
  return filter
}

console.log(test(arr1, val1));