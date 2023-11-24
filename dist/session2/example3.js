"use strict";
// Một cụm từ được coi là palindrome nếu sau khi chuyển tất cả các chữ hoa thành chữ thường và loại bỏ tất cả các ký tự không chữ và không phải chữ số, cụm từ đó đọc từ trái sang phải và từ phải sang trái giống nhau. Các ký tự chữ và chữ số được coi là chữ và số.
// Cho một chuỗi đầu vào s, viết một hàm kiểm tra tính hợp lệ là palindrome trả về true nếu nó là một palindrome, ngược lại trả về false.
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
function isPalindrome(s) {
    const str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    const strReverse = str.split("").reverse().join("");
    return str == strReverse;
}
const s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));
