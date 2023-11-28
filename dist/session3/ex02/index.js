"use strict";
// Exercise 02
// (Phương trình bậc 2) Thiết kế một lớp tên là QuadraticEquation cho một phương trình bậc hai (quadratic equation) ax2 + bx + c = 0. Lớp này gồm các thành phần:
// Trường dữ liệu a, b, và c thuộc kiểu private number đại diện cho 3 hệ số.
// Phương thức khởi tạo với 3 tham số để khởi tạo các giá trị cho a, b và c.
// Phương thức gettter và setter cho a, b và c.
// Phương thức getDiscriminant() trả về delta theo công thức delta = b2 - 4ac.
// Phương thức getRoot1() và getRoot2() trả về 2 nghiệm của phương trình là:
// getRoot1() và getRoot2() thật sự hữu ích khi delta >= 0. Hai phương thức này trả về 0 khi delta < 0.
// Vẽ sơ đồ UML cho lớp QuadraticEquation và cài đặt lớp.
// Viết chương trình thực thi như sau:
// Nhập vào 3 giá trị cho a, b, c và hiển thị kết quả dựa trên việc tính delta. Nếu delta >= 0, hiển thị 2 nghiệm. Nếu delta bằng 0, hiển thị một nghiệm (do 2 nghiệm bằng nhau). Còn lại hiển thị chuỗi “The equation has no roots”
class QuadraticEquation {
    constructor(a, b, c) {
        this._a = a;
        this._b = b;
        this._c = c;
    }
    get a() {
        return this._a;
    }
    set a(value) {
        this._a = value;
    }
    get b() {
        return this._b;
    }
    set b(value) {
        this._b = value;
    }
    get c() {
        return this._c;
    }
    set c(value) {
        this._c = value;
    }
    getDiscriminant() {
        return this._b * this._b - 4 * this._a * this._c;
    }
    getRoot1() {
        return (-this._b + Math.sqrt(this.getDiscriminant())) / (2 * this._a);
    }
    getRoot2() {
        return (-this._b - Math.sqrt(this.getDiscriminant())) / (2 * this._a);
    }
}
let a = Number(prompt("Enter a: "));
let b = Number(prompt("Enter b: "));
let c = Number(prompt("Enter c: "));
let quadraticEquation = new QuadraticEquation(a, b, c);
let delta = quadraticEquation.getDiscriminant();
if (delta > 0) {
    console.log(`Root 1: ${quadraticEquation.getRoot1()}`);
    console.log(`Root 2: ${quadraticEquation.getRoot2()}`);
}
else if (delta === 0) {
    console.log(`Root: ${quadraticEquation.getRoot1()}`);
}
else {
    console.log("The equation has no roots");
}
