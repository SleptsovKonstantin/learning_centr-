const arr1 = [1, 3, 5, 2, 4, 10, 6];

const func = (arr) => {
  if (arr.length > 1) {
    const obj = {
      max: null,
      index: null,
      count: null,
    };
    obj.max = _.max(arr);
    obj.index = _.indexOf(arr,obj.max);
    const filter = arr.filter(val => val === obj.max) 
    obj.count = filter.length
    return obj;
  } else {
    const obj1 = {
      max: arr[0],
      index: 0,
      count: 1,
    };
    return obj1;
  }
};

console.log(func(arr1));
