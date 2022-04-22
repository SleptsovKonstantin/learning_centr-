const newObj = { a: 4, b: 8 };

const test = (obj) => {
  const str = "https://underscorejs.org";
  const { a, b } = obj;

  const newStr = str + "?" + `a=${a}` + "&" + `b=${b}`;
  return newStr;
};

console.log(test(newObj));
