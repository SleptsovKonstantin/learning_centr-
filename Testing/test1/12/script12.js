const arrayFill = (val, num) => {
  const result = [];
  let i = 0;

  while (i < num) {
    result.push(val);
    i++;
  }

  return result;
};

console.log(arrayFill("x", 5));
