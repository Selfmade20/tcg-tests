const arr = [24, 8, 23, 32, 5, 62];

sortArray = () => {
    let sortedArr = arr.sort((a, b) => a - b);
    return sortedArr;
}

console.log(sortArray());