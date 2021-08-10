// https://leetcode.com/problems/maximum-subarray/

// Kadane's Algorithm

/**
 * Maximum Subarray
 *
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 *
 * A subarray is a contiguous part of an array.
 *
 * Example 1:
 *
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 * Example 2:
 *
 * Input: nums = [1]
 * Output: 1
 * Example 3:
 *
 * Input: nums = [5,4,-1,7,8]
 * Output: 23
 *
 *
 * Constraints:
 *
 * 1 <= nums.length <= 3 * 104
 * -105 <= nums[i] <= 105
 *
 *
 * Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 *
 */

// // var maxSubArray = function (nums) {
// //   // [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// //   // Initialize max as first element
// //   let max = nums[0]; // max = 1

// //   // loop through array from second element
// //   for (let i = 1; i < nums.length; i++) {
// //     if (nums[i - 1] > 0) {
// //       // if (1 > 0)
// //       nums[i] += nums[i - 1]; // nums[2] = -2
// //     }

// //     if (nums[i] > max) max = nums[i]; // if (1 > -2) max = 1
// //   }

// //   return max;
// // };

// function maximumSubarray(ar) {
//   // Input: array
//   // Output: largest int from contiguous sum

//   // Brute Force

//   // 1. Starting from the beginning of the array, loop through
//   // 2. increment the size of subarray and loop starting at the beginning. Once it reaches end, increment subarray size by 1.
//   // 3. continue above step until subarray length === ar.length
//   // 4. for each iteration of the sub-array, compare and keep track of its sum. If newSum > maxSum, set maxSum = newSum.

//   let maxSum = ar[0];
//   let i = 0;
//   let j = 1;
//   let loops = 1;

//   function getSumOfArray(ar) {
//     let sum = 0;
//     for (let i = 0; i < ar.length; i++) sum += ar[i];
//     return sum;
//   }

//   while (true) {
//     let subAr = ar.slice(i, j);
//     if (subAr.length === ar.length) return maxSum;
//     // Reset subarray window to beginning
//     if (j === ar.length - 1 && subAr.length !== ar.length) {
//       loops++;
//       i = 0;
//       j = loops;
//     }
//     if (j < ar.length && subAr.length < ar.length) {
//       // check if subarray is bigger than maxSum
//       if (getSumOfArray(subAr) > maxSum) {
//         maxSum = getSumOfArray(subAr);
//       }
//       // move subarray window
//       i++;
//       j++;
//     }
//   }
// }

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
