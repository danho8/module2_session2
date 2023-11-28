"use strict";
// Cho một mảng số nguyên nums và một số nguyên target, viết một hàm trả về kết quả là một mảng chỉ số của hai số trong mảng nums sao cho tổng của chúng bằng target.
function sumTarget(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                console.log([arr[i], arr[j]]);
            }
        }
    }
    return 0;
}
const arr = [2, 7, 11, 15];
const target = 9;
