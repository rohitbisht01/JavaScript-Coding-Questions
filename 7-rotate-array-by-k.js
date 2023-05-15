// rotate the array to the right by k steps
// input : nums = [1,2,3,4,5,6,7] k = 3
// output : [5,6,7,1,2,3,4]

function rotateArrayByK(nums, k) {
  let newArr = [];
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    let index = (i + k) % len;
    newArr[index] = nums[i];
  }
  return newArr;
}

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
const newarr = rotateArrayByK(nums, k);
console.log(newarr);
