let arr = [
  { name: "width", value: 300 },
  { name: "height", value: 100 },
];

const obj = (arr) => {
  const arrName = _.pluck(arr, "name");
  const arrVal = _.pluck(arr, "value");
  const obj = _.object(arrName, arrVal);
  return obj;
};

console.log(obj(arr));
