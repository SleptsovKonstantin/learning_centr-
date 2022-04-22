const user = { name: "width", value: 300, age: 20 };

const test = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
  return obj
}

console.log(test(user));
