// Cho hai chuỗi s và t, viết một hàm kiểm tra trả về true nếu t là một từ hoán vị của s và false trong trường hợp ngược lại.

// Một từ hoán vị là một từ hoặc cụm từ được tạo thành bằng cách sắp xếp lại các chữ cái của một từ hoặc cụm từ khác, thường là sử dụng tất cả các chữ cái gốc một lần duy nhất.

// Ví dụ 1: 
// Input: s = "anagram", t = "nagaram"
// Output: true


function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const sArr = s.split("").sort();
  const tArr = t.split("").sort();
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] !== tArr[i]) {
      return false;
    }
  }
  return true;
}