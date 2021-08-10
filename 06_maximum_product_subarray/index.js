/**
 * Maximum Product Subarray
 *
 * Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
 *
 * It is guaranteed that the answer will fit in a 32-bit integer.
 *
 * A subarray is a contiguous subsequence of the array.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [2,3,-2,4]
 * Output: 6
 * Explanation: [2,3] has the largest product 6.
 * Example 2:
 *
 * Input: nums = [-2,0,-1]
 * Output: 0
 * Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 *
 *
 * Constraints:
 *
 * 1 <= nums.length <= 2 * 104
 * -10 <= nums[i] <= 10
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 */

// var maxProduct = function (nums) {
//   let max = -Infinity;
//   let product = 1;
//   let negProduct = null;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < 0) {
//       if (negProduct) {
//         product = negProduct * product * nums[i];
//         negProduct = null;
//       } else {
//         negProduct = product * nums[i];
//         product = 1;
//       }
//     } else {
//       product = product * nums[i];
//     }

//     if (product > max) max = product;

//     if (product <= 0) product = 1;
//   }

//   return max;
// };

function maxProduct(nums) {
  // input: array
  // output: maximum product of all numbers
  // Brute force O(n^2)
  // Kadane's Algorithm O(n)

  // 3 variables: maxGlobal, maxCurrent, minCurrent = 2

  // []
  // [ 2, 3, -2, 4 ]

  let maxGlobal = (maxCurrent = minCurrent = nums[0]);

  // loop through the array, starting from 2nd element.
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) [maxCurrent, minCurrent] = [minCurrent, maxCurrent];
    maxCurrent = Math.max(nums[i], nums[i] * maxCurrent);
    minCurrent = Math.min(nums[i], nums[i] * minCurrent);
    if (maxCurrent > maxGlobal) maxGlobal = maxCurrent;
  }

  return maxGlobal;
}

console.assert(maxProduct([2, 3, -2, 4]) === 6); // 6
console.assert(maxProduct([-2, 0, -1]) === 0); // 0
console.assert(maxProduct([-2, 3, -4]) === 24); // 24
console.assert(maxProduct([2, -5, -2, -4, 3]) === 24); // 24
console.assert(maxProduct([-3, -1, -1]) === 3); // 3
