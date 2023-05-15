// kadane algo => maximum sum subarray - find the subarray with the largest sun, and return its sum

function bruteforce(nums) {
  let start_ind = 0;
  let end_ind = 0;
  let max_sum = Number.MIN_VALUE;
  for (let i = 0; i < nums.length; i++) {
    let cur_sum = 0;
    for (let j = i; j < nums.length; j++) {
      cur_sum += nums[j];

      if (cur_sum > max_sum) {
        max_sum = cur_sum;
        start_ind = i;
        end_ind = j;
      }
    }
  }
  return { sum: max_sum, subarray: nums.slice(start_ind, end_ind + 1) };
}

const nums = [5, 4, -1, 7, 8];
console.log(bruteforce(nums));

function kadaneAlgo(nums) {
  let max_sum = Number.MIN_VALUE;
  let cur_sum = 0;
  for (let i = 0; i < nums.length; i++) {
    cur_sum += nums[i];
    if (cur_sum > max_sum) {
      max_sum = cur_sum;
    }
    if (cur_sum < 0) {
      cur_sum = 0;
    }
  }
  return max_sum;
}

console.log(kadaneAlgo(nums));
