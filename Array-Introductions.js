let arr = ["apple", "banana", "cherry"];

// add the element at the end of the array
arr.push("orange");

// removes from the end of the array
arr.pop();

// add to the top of the array
arr.unshift("orange");

// removes the first element from the array
arr.shift();

// console.log(arr);

// looping in array
for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

// using map - it takes a function as a callback

// spread and rest operators
// 1. spread operator
const nums = [1, 2, 3];
const nums1 = [4, 5, 6];

const finalNums = [...nums, ...nums1];
// console.log(finalNums);

// 2. rest operator - passed as a parameter to a function
function sum(...numbers) {
  return numbers;
}

// console.log(sum(nums, nums1));

// concat() - gives a new array
const newArr = nums.concat(nums1, nums);
// console.log(newArr);

// slice(firstindex,lastindex) - excludes the last index -
const array = arr.slice(0, 2);
// console.log(array);

// we can do something like this and this would return the last element
// console.log(arr.slice(-1));

// splice(start,deletecount) - removes elements from an array and insers new elements in their place returning the deleted element
// console.log(arr.slice(0, 2));
// we can insert an element if necessary it won't be returning an array (inplace)
// arr.splice(1, 2, "rohit");
// console.log(arr);

// fill - replace all the element with whatever you have mentioned in the fill function
const dummy = [1, 2, 3, 45, 6];
// dummy.fill(0);

// fill(newvalue,startindex)
dummy.fill(0, 2);
// console.log(dummy);

// findIndex(number) - returns the index for the element
const index = dummy.findIndex((ind) => ind === 2);
// console.log(index);

// flat()
// you can flat the array through as many level as you want by specifying the depth
// flat(2)
const flatArr = [1, [2, 3], [[4, 5]], 6];
// const newFlatArr = flatArr.flat();
const newFlatArr = flatArr.flat(2);
// console.log(newFlatArr);

// reverse() - reverse the array
// sort() - sort the array
const unsorted = [7, 5, 6, 2, 1];
console.log(unsorted.sort());
