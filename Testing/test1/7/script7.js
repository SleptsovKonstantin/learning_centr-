const str = "var_text_hello";
const arrSplit = str.split("_");

const up = (arra) => {
  const arr1 = [];

  arra.forEach((element, index) => {
    if (index === 0) {
      arr1.push(element);
    } else {
      let str = element.charAt(0).toUpperCase() + element.slice(1);
      arr1.push(str);
    }
  });
  return arr1;
};

let strNew = up(arrSplit).join('_');
console.log(strNew);
