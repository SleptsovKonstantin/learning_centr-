const str = 'asd1wer2erter3fdg5gfhgf6'

const test = (str) => {
  let i = 2; 
  while( i < str.length) {
    console.log(str.charAt(i));
    i = i + 3
  }
}

console.log(test(str));