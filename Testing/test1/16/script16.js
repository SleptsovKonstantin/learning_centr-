const newArr = [
  { name: "Slavutich", age: 6 },
  { name: "Kostya", age: 18 },
  { name: "Anton", age: 25 },
  { name: "Liza", age: 43 },
  { name: "Maxon", age: 34 },
];

const sort1 = (arr) => {
  arr.sort((a, b) => a.age > b.age ? 1 : -1);
  return arr
}

console.log(sort1(newArr));

const sort2 = (arr) => {
  arr.sort((a, b) => a.age < b.age ? 1 : -1);
  return arr
}

console.log(sort2(newArr));

