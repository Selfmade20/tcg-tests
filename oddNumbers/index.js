var nums = [1, 3, 5, 6, 7, 9];
var evens = [];
var odds = [];

var oddNumbers = function (nums) {
    for (var i = 0; i < nums.length; i++) {

        if ((nums[i] % 2) != 1) {
            evens.push(nums[i]);
            console.log(evens);
        }
        else {
            odds.push("_" + nums[i]);
            console.log("This are the odd Numbers", odds);
        }
    }

};

console.log(oddNumbers(nums));
