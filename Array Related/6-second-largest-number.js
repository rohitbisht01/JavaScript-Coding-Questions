// input : [12,35,1,10,34,1,35] => [1,1,10,12,34,35,35]
// now here the second largest would be 34

// not  a good approach - using set and sort function
function secondLargest(nums) {
  const uniqueArr = new Set(nums);
  //   console.log(uniqueArr);
  // now this is returning us an object we need to convert the object into array
  const newarr = Array.from(uniqueArr);
  newarr.sort((a, b) => {
    return b - a;
  });
  if (newarr.length >= 2) {
    return newarr[1];
  }
  return -1;
}
// console.log(secondLargest(nums));

// another approach
function secondLargestOptimized(nums) {
  let firstLargest = -1;
  let secondLargest = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = nums[i];
    } else if (nums[i] > secondLargest && nums[i] !== firstLargest) {
      secondLargest = nums[i];
    }
  }
  return secondLargest;
}

const nums = [12, 35, 1, 10, 34, 1, 35];
console.log(secondLargestOptimized(nums));

// we could also use
let firstLargest = Number.NEGATIVE_INFINITY;
let secondLargest = Number.NEGATIVE_INFINITY;
