// remove duplicate from sorted array and the relative order should be kept same

// input : [0,0,1,1,1,2,2,3,3,4] =>
// output : 5 [0,1,2,3,4,_,_,_,_,_]

function solve(nums) {
  const newarr = new Set(nums);
  const convertToArray = Array.from(newarr);
  return convertToArray.length;
}
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// console.log(solve(nums));

// we don't want to return a new array we have to do it inplace

function removeDuplicates(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
  }
  return nums.length;
}

// console.log(removeDuplicates(nums));

// another way without using in-built methods

function removeDuplicates1(nums) {
  if (nums.length === 0) return 0;
  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[i + 1]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
}

console.log(removeDuplicates1(nums));
