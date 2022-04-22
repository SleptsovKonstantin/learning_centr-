const mass = [6, 4, 8, -2, 6, 8, -1, 7, 8, 8, -9, 3, 5];

const filterFunc1 = (mass) => { 
  const newArr = [];
  mass.forEach(value => {

    if (value > 0) {
      newArr.push(value)
    }

  });

  return newArr;
}

const mass1 = [6, 4, 8, -2, 6, 8, -1, 7, 8, 8, -9, 3, 5];

const filterFunc2 = (mass, value1) => { 
  const newArr = [];

  mass.forEach(value => {

    if (value > value1) {
      newArr.push(value)
    }

  });

  return newArr;
}

const mass2 = [6, 4, 8, -2, 6, 8, -1, 7, 8, 8, -9, 3, 5];

const filterFunc3 = (mass, value1) => { 
  const newArr = [];

  mass.forEach(value => {
    value > value1 ? newArr.push(value) : newArr.push(null);
  });

  return newArr;
}

const result1 = filterFunc1(mass);
const result2 = filterFunc2(mass1, 4);
const result3 = filterFunc3(mass2, 4);


const str = `Lorem ipsum dolor sit amet, consectetur adipiscingelit. 
  Fusce commodo sem lacus, rhoncus mattis lacus rhoncus in.
  Morbi fringilla molestie purus ut laoreet. Aliquam semper magna nec vulputate vestibulum. 
  Suspendisse interdum fermentum enim vel bibendum. Praesent sit amet magna a felis hendrerit blandit at nec turpis. 
  Pellentesque eu lectus ut orci commodo maximus. Mauris imperdiet aliquam nisi nec sagittis. 
  In dictum nunc a eros fermentum, nec dignissim libero laoreet. Morbi sit amet tellus at tellus maximus volutpat. 
  Sed vel magna nec odio pulvinar auctor. Nullam venenatis quam quam, at vestibulum nibh varius vitae. 
  In viverra erat quis turpis efficitur, euismod rutrum dui imperdiet. Suspendisse lobortis euismod elit at tempus. 
  Aenean vehicula suscipit ligula nec rhoncus. Etiam vitae porttitor nunc, sed placerat nunc.`;

const testfunction = (string1) => {
    console.log(`string1 ${string1} test function`);
    console.log(`text string output`);
}
