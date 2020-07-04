//slice------slice a part of a array//
const nums = [1, 2, 3, 4, 5, 56, , 5, 7, 8];
const part = nums.slice(2, 5);

//spile-----remove and inject a part of a array//
const removed = nums.splice(2, 5); // (index position, number of array delete)
const removed = nums.splice(2, 5, 77); // (index position , number of array delete , items injected)
console.log(removed);
console.log(nums);
//join-----join something//
const together = nums.join(" "); //1 2 5 7 8
const together = nums.join("Ami "); //1Ami 2Ami 5Ami 7Ami 8Ami
console.log(together);
