// Solution 1 - using built-in method
const isPalindrome = function (x) {
  if (x < 0) return false;
  return x === +x.toString().split("").reverse().join("");
};
// 121 => "121" => ["1","2","1"] => ["1","2","1"] => "121" => 121
console.log(isPalindrome(10));
