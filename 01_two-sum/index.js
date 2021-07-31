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

// map = { 2: 0, 7: 1 }

// [2,7,11,15]

// [-5, -3, -2, 0, 2, 5, 6, 12], 7
// [2, 5, 6], 7

// HCL

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

// input: array, int
// output: [idx1, idx2]

//      1          2
// [ 2, 3, 7, 11, 15], 14

// n + (n -1) + (n - 2) .... + 1

// function twosum(ar, target) {
//   if (ar.length < 2) return false;

//   let p1 = 0;
//   let p2 = 1;

//   while (p2 < ar.length) {
//     if (ar[p1] + ar[p2] === target) return [p1, p2];
//     else if (p2 === ar.length - 1) {
//       p1++;
//       p2 = p1 + 1;
//       console.log(ar[p1], ar[p2]);
//     } else {
//       p2++;
//     }
//   }
// }

// function twoSum(ar, target) {
//   for (let i = 0; i < ar.length; i++) {
//     for (let j = i + 1; j < ar.length; j++) {
//       if (ar[i] + ar[j] === target) return [i, j];
//     }
//   }
// }

function twoSum(ar, target) {
  const map = {};
  for (let i = 0; i < ar.length; i++) {
    let diff = target - ar[i];
    if (map[diff] !== undefined) {
      return [i, map[diff]];
    }
    map[ar[i]] = i;
  }
}

console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([2, 7, 11, 15], 9));
