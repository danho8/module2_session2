// Cho một mảng số nguyên nums, viết một hàm tìm và trả về tổng của mảng con (subarray) có tổng lớn nhất và in ra mảng con có tổng lớn nhất
// function maxSubArray(nums: number[]): number {
//   let max = nums[0]; // giả sử phần tử đầu tiên là max
//   let sum = 0;
//   for (let num of nums) {
//     if (sum < 0) {
//       sum = 0;
//     }
//     sum += num;
//     max = Math.max(max, sum); // so sánh max với sum và lấy giá trị lớn hơn gán cho max
//   }
//   return max; // trả về max
// }

// console.log(maxSubArray([-2, 10, -3, 4, -1, 2, 1, -5, 4])); // 6

function maxSubArray(nums: number[]) {
  let maxSum: number = nums[0];
  let currentSum: number = nums[0];

  for (let i: number = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

const nums: number[] = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubArray(nums));
