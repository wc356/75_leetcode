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

var productExceptSelf = function (nums) {
  let answer = [];
  let reverseProduct = 1;

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) answer.push(1);
    else {
      answer.push(answer[i - 1] * nums[i - 1]);
    }
  }

  for (let j = nums.length - 2; j >= 0; j--) {
    reverseProduct *= nums[j + 1];
    answer[j] *= reverseProduct;
  }

  return answer;
};

var productExceptSelf = function (nums) {
  const N = nums.length;
  const arLeft = new Array(N);
  // const arRight = new Array(N);

  arLeft[0] = 1;
  // arRight[N - 1] = 1;
  let reverseProduct = 1;
  // const prodArray = new Array(N);

  for (let i = 1; i < N; i++) {
    arLeft[i] = arLeft[i - 1] * nums[i - 1];
  }
  // i (i + 1)
  // [1,2,3,4] = 4 length
  //

  for (let i = N - 2; i >= 0; i--) {
    reverseProduct *= nums[i + 1];
    // arRight[i] = arRight[i + 1] * nums[i + 1];
    arLeft[i] *= reverseProduct;
  }

  // for (let i = 0; i < N; i++) {
  //   prodArray[i] = arLeft[i] * arRight[i];
  // }

  return arLeft;
};

console.log(productOfArraySelf([4, 5, 1, 8, 2]));
console.log(productOfArraySelf([1, 2, 3, 4]));
