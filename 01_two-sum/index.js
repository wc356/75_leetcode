//leetcode.com/problems/two-sum/

/**
 * 1. Two Sum
 * Easy
 *
 * Add to List
 *
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 * Example 1:
 *
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Output: Because nums[0] + nums[1] == 9, we return [0, 1].
 * Example 2:
 *
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * Example 3:
 *
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 *
 * Constraints:
 *
 * 2 <= nums.length <= 104
 * -109 <= nums[i] <= 109
 * -109 <= target <= 109
 * Only one valid answer exists.
 *
 * Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
 */

//  var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) return [i, j];
//         }
//     }
// };

// var twoSum = function (nums, target) {
//   const map = {};

//   for (let i = 0; i < nums.length; i++) {
//     let diff = target - nums[i];
//     if (map[diff] !== undefined) {
//       return [i, map[diff]];
//     }
//     map[nums[i]] = i;
//   }
// };

// n + (n -1) + (n - 2) .... + 1

// function twoSum(ar, target) {
//   const map = {};
//   for (let i = 0; i < ar.length; i++) {
//     let diff = target - ar[i]; // 3 // 4 // 2
//     if (map[diff] !== undefined) {
//       return [i, map[diff]];
//     }
//     map[ar[i]] = i; // 3: 0 // 2: 1
//   }
//   return map;
// }

// function twoSum(ar, target) {
//   // input: ar, int | [2,5,3,6], 9
//   // output: ar     | [1, 2]
//   const map = {};

//   for (let i = 0; i < ar.length; i++) {
//     const diff = target - ar[i];
//     if (map[diff] !== undefined) {
//       return [map[diff], i];
//     }
//     map[ar[i]] = i;
//   }
// }

// function twoSum(ar, target) {
//   // input: array, int | [3,2,5,6,3], 9
//   // output: array of int | [0,3]

//   // On^2
//   for (let i = 0; i < ar.length; i++) {
//     for (let j = 0; j < ar.length; j++) {
//       if (i !== j && ar[i] + ar[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

function twoSum(ar, target) {
  // input: [int], int
  // output: [int, int]

  const map = {};

  for (let i = 0; i < ar.length; i++) {
    const diff = target - ar[i];
    if (map[diff] !== undefined) {
      return [map[diff], i];
    }
    map[ar[i]] = i;
  }
}

// {
//   7: 0
// }

// [2, 7, 11, 15]

console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([2, 7, 11, 15], 9));
