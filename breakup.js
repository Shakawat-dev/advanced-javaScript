//break and continue//
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const nums1 = [1, -2, 3, 4, -5, 6, 7, 8, 9];
for (let i = 0; i < nums1.length; i++) {
  if (nums1[i] < 0) {
    //break; //stop loop
    //continue; //skip -2, -5
  }
  console.log(nums1[i]);
}
