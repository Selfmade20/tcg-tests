const arr = [2, 3, 5];

multiplyValues = () => {
  return arr.reduce((a, b) => a * b);
}

console.log(multiplyValues());