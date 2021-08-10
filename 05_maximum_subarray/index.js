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

function maxSubArray(ar) {
  // input: unsorted array
  // output: maximum sum of contiguous nums
  // SLIDING WINDOW APPROACH
  // [ i     j ] // when j <= ar.length, reset the window to beginning and increase the subarray length by 1
  // [ 1, 2, 3, 4, 5, 6 ]
  // [ i  j ] // when j === ar.length - 1, slide the window to the right. If i === ar.length - 2, return maxSum.
  // [ 1, 2, 3, 4, 5, 6 ]
  // // Edge case: when array only has 1 element
  // if (ar.length === 1) return ar[0];
  // let maxSum = -Infinity;
  // for (let i = 0; i < ar.length; i++) {
  //   for (let j = i + 1; j <= ar.length; j++) {
  //     let subArr = ar.slice(i, j);
  //     let subArrSum = subArr.reduce((prev, curr) => prev + curr);
  //     if (subArrSum > maxSum) maxSum = subArrSum;
  //     if (i === ar.length - 1 && j === ar.length) return maxSum;
  //   }
  // }

  // Kadane's algorithm: https://www.youtube.com/watch?v=86CQq3pKSUw
  // input: array
  // output: maximum sum of contiguous subarray

  // Kadane's Algorithm O(n) time

  // maxCurr
  // maxGlobal

  // [ -2, 1, -3, 4, -1, 2, 1, -5, 4 ]

  let maxCurr = (maxGlobal = ar[0]);
  for (let i = 1; i < ar.length; i++) {
    maxCurr = Math.max(ar[i], maxCurr + ar[i]);
    if (maxCurr > maxGlobal) maxGlobal = maxCurr;
  }
  return maxGlobal;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-1, -3, -5, -7, 8, 9]));
console.log(maxSubArray([-2, 1]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
