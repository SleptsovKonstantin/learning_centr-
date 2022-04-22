const newArr = [11, 6, 523, 353, 1235, 5, 12335, 121];

const test = (arr, num) => {
  if (_.indexOf(arr, num) !== -1 ) {
    console.log('да');
  } else {
    console.log('нет');
  }
};

test(newArr, 5);
