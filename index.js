const arr = [2, 3, 5];

multiplyValues = (a,b) => {
  return arr.reduce((a, b) => a * b);
}

console.log(multiplyValues());