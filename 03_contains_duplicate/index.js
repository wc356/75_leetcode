// https://leetcode.com/problems/contains-duplicate/

/**
 *
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,1]
 * Output: true
 * Example 2:
 *
 * Input: nums = [1,2,3,4]
 * Output: false
 * Example 3:
 *
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 *
 *
 * Constraints:
 *
 * 1 <= nums.length <= 105
 * -109 <= nums[i] <= 109
 */

// var containsDuplicate = function (nums) {
//   let map = {};

//   for (let i = 0; i < nums.length; i++) {
//     if (map[nums[i]]) return true;
//     map[nums[i]] = 1;
//   }

//   //   const keys = Object.keys(map);

//   //   for (let j = 0; j < keys.length; j++) {
//   //     if (map[keys[j]] > 1) return true;
//   //   }

//   return false;
// };

// var containsDuplicate = function (nums) {
//   const sortedNums = [...nums].sort((a, b) => a - b);

//   for (let i = 1; i < sortedNums.length; i++) {
//     if (sortedNums[i] === sortedNums[i - 1]) return true;
//   }

//   return false;
// };

function containsDuplicate(ar) {
  // // brute force
  // for (let i = 0; i < ar.length; i++) {
  //   for (let j = 0; i !== j && j < ar.length; j++) {
  //     if (ar[i] === ar[j]) return true;
  //   }
  // }
  // return false;

  // const set = new Set();
  // for (let i = 0; i < ar.length; i++) {
  //   if (!set.has(ar[i])) {
  //     set.add(ar[i]);
  //   } else {
  //     return true;
  //   }
  // }
  // return false;

  ar.sort();
  for (let p1 = 1; p1 < ar.length; p1++) {
    if (ar[p1] === ar[p1 - 1]) return true;
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(containsDuplicate([1, 2, 3, 4, 5]));
