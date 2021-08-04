// https://leetcode.com/problems/product-of-array-except-self/

/**
 * Product of Array Except Self
 *
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 *
 * Example 2:
 *
 * Input: nums = [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 *
 *
 * Constraints:
 *
 * 2 <= nums.length <= 105
 * -30 <= nums[i] <= 30
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 */

// given array of int, return an array where answer[i] === product of all elements of array except nums[i]
// MUST write O(n) time, without using division operation

// function productOfArraySelf(nums) {
//   // const returnAr = [];

//   // for (let i = 0; i < nums.length; i++) {
//   //   let product = 1;
//   //   for (let j = 0; j < nums.length; j++) {
//   //     if (i !== j) product *= nums[j];
//   //   }
//   //   returnAr.push(product);
//   // }
//   // return returnAr;

//   // keep track of indices
//   // resultAr

//   //  i
//   // [1,2,3,4]

//   let prod = 1;
//   let i = 0;
//   let j = 0;
//   const result = [];

//   while (i < nums.length) {
//     // reset conditions
//     if (j === nums.length) {
//       result.push(prod);
//       j = 0;
//       prod = 1;
//       i++;
//     }
//     // multiply
//     if (i !== j) prod *= nums[j];
//     // increment iterations
//     j++;
//   }
//   return result;
// }

function productOfArraySelf(nums) {
  // [ 1, 2, 3, 4 ]
  // [ 24, 12, 8, 6 ]
  // loop through the right
  // loop through the left
  const N = nums.length;
  const left_prods = new Array(N);
  const right_prods = new Array(N);

  const result_prods = new Array(N);

  left_prods[0] = 1;
  right_prods[N - 1] = 1;

  for (let i = 1; i < N; i++) {
    left_prods[i] = left_prods[i - 1] * nums[i - 1];
  }

  for (let i = N - 2; i >= 0; i--) {
    right_prods[i] = right_prods[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < N; i++) {
    result_prods[i] = left_prods[i] * right_prods[i];
  }

  return result_prods;
}

console.log(productOfArraySelf([4, 5, 1, 8, 2]));
console.log(productOfArraySelf([1, 2, 3, 4]));
