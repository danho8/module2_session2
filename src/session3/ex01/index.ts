// Exercise 01

// Xây dựng lớp Circle gồm các thuộc tính :

// Bán kính và Màu sắc

// Các phương thức khởi tạo (constructor)

// Các phương thức getter và setter

// Phương thức chuVi() trả về chu vi của hình tròn

// Phương thức dienTich() trả về diện tích hình tròn

// Phương thức inputData() cho phép người dùng nhập vào toàn bộ thông tin của đối tượng

// Phương thức displayData() cho phép hiển thị toàn bộ thông tin các thuộc tính.

// Yêu cầu vẽ biểu đồ lớp Circle trước khi triển khai

// (Tìm hiểu về cách vẽ sơ đồ UML) - OPTIONAL

class Circles {
  private _radius: number;
  private _color: string;

  constructor(radius: number, color: string) {
    this._radius = radius;
    this._color = color;
  }

  get radius(): number {
    return this._radius;
  }

  set radius(value: number) {
    this._radius = value;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  chuVi(): number {
    return 2 * Math.PI * this._radius;
  }

  dienTich(): number {
    return Math.PI * this._radius * this._radius;
  }

  inputData():void {
    this._radius = Number(prompt("Nhap ban kinh: "));
    this._color = String(prompt("Nhap mau sac: "));
  }

  displayData() {
    console.log(`Ban kinh: ${this._radius}`);
    console.log(`Mau sac: ${this._color}`);
  }
}

let circle = new Circles(1, "red");
circle.inputData();
circle.displayData();
console.log(`Chu vi: ${circle.chuVi()}`);
console.log(`Dien tich: ${circle.dienTich()}`);
