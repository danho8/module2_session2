"use strict";
function isValid(s) {
    let stack = [];
    let onj = {
        "(": ")",
        "[": "]",
        "{": "}",
    };
    for (let i = 0; i < s.length; i++) {
        // lăp qua từng phần tử của chuỗi s
        if (onj[s[i]]) {
            // nếu phần tử đó là dấu mở ngoặc thì push vào stack với mục đích so sánh với dấu đóng ngoặc
            stack.push(onj[s[i]]);
        }
        else {
            // nếu phần tử đó là dấu đóng ngoặc thì so sánh với phần tử cuối cùng của stack
            if (s[i] !== stack.pop()) {
                // nếu không giống thì return false
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log("=>>>", isValid("{()")); // true
