// Thiết kế lớp Fan to để mô tả về cái quạt.

// Lớp này gồm các thành phần sau:

// Các hằng được đặt tên là SLOW, MEDIUM, và FAST với giá trị 1, 2, và 3 để biểu thị tốc độ quạt.

// Trường speed có kiểu số nguyên (private int) để xác định tốc độ quạt, mặc định là SLOW

// Trường on có kiểu private boolean để xác định quạt đang bật hay tắt, mặc định là false (tắt).

// Trường radius có kiểu private double để xác định bán kính quạt, giá trị mặc định là 5

// Trường color có kiểu dữ liệu private String để xác định màu quạt, mặc định là blue

// Các getter và setter cho các thuộc tính

// Phương thức khởi tạo

// Phương thức toString() trả về chuỗi chứa thông tin của quạt. Nếu quạt đang ở trạng thái on, phương thức trả về speed, color, và radius với chuỗi “fan is on”. Nếu quạt không ở trạng thái on, phương thức trả về color, radius với chuỗi “fan is off”.

// Vẽ sơ đồ UML cho lớp và cài đặt lớp

// Viết chương trình hiển thị các đối tượng bằng cách gọi phương thức toString
// Tạo 2 đối tượng Fan :

// Đối tượng Fan 1: Gán giá trị lớn nhất cho speed, radius là 10, color là yellow và quạt ở trạng thái bật.

// Đối tượng Fan 2: Gán giá trị trung bình cho speed, radius là 5, color là blue và quạt ở trạng thái tắt

class Fan {
    static SLOW = 1;
    static MEDIUM = 2;
    static FAST = 3;

    private _speed: number;
    private _on: boolean;
    private _radius: number;
    private _color: string;

    constructor(speed: number, on: boolean, radius: number, color: string) {
        this._speed = speed;
        this._on = on;
        this._radius = radius;
        this._color = color;
    }

    get speed(): number {
        return this._speed;
    }

    set speed(value: number) {
        this._speed = value;
    }

    get on(): boolean {
        return this._on;
    }

    set on(value: boolean) {
        this._on = value;
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

    toString() {
        if (this._on) {
            return `Fan is on: speed: ${this._speed}, color: ${this._color}, radius: ${this._radius}`;
        } else {
            return `Fan is off: color: ${this._color}, radius: ${this._radius}`;
        }
    }
}

let fan1 = new Fan(Fan.FAST, true, 10, "yellow");
let fan2 = new Fan(Fan.MEDIUM, false, 5, "blue");
console.log(fan1.toString());
console.log(fan2.toString());
// Compare this snippet from src/session3/ex04/index.ts:
