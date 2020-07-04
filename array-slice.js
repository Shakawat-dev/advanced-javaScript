//slice------slice a part of a array//
const numb = [1, 2, 3, 4, 5, 56, , 5, 7, 8];
const part = numb.slice(2, 5);

//spile-----remove and inject a part of a array//
const removed = numb.splice(2, 5); // (index position, number of array delete)
const removed = numb.splice(2, 5, 77); // (index position , number of array delete , items injected)
console.log(removed);
console.log(numb);
//join-----join something//
const together = numb.join(" "); //1 2 5 7 8
const together = numb.join("Ami "); //1Ami 2Ami 5Ami 7Ami 8Ami
console.log(together);
