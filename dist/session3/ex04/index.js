"use strict";
// Xây dựng lớp Student gồm các thuộc tính như: mã HS, tên HS, tuổi,s địa chỉ và số điện thoại. các phương thức khởi tạo (constructor), phương thức inputData() cho phép người dùng nhập vào toàn bộ thông tin của đối tượng, phương thức displayData() cho phép hiển thị toàn bộ thông tin học sinh.
// Xây dựng chương trình với chức năng bao gồm :
// Hiển thị danh sách tất cả học sinh
// Thêm mới học sinh
// Sửa thông tin học sinh dựa vào mã học sinh
// Xóa học sinh
// Thoát
// Yêu cầu vẽ biểu đồ lớp UML Student trước khi triển khai.
// Bước 1: Tạo lớp Student , khai báo các thuộc tính (properties), định nghĩa các phương thức khởi tạo (constructors).
// Bước 2: Tạo lớp Main chứa phương thức main() để chạy chương trình.
// Bước 3: Trong phương thức main() khởi tạo danh sách Student có độ rộng 100 phần tử. Tạo menu chức năng như yêu cầu. Sử dụng cấu trúc lặp while và cấu trúc điều kiện switch case để điều hướng chức năng theo lựa chọn của người dùng (C/R/U/D) sử dụng prompt.
// Bước 4: Chạy chương trình và quan sát kết quả.
class Student {
    constructor(id, name, age, address, phone) {
        this._id = id;
        this._name = name;
        this._age = age;
        this._address = address;
        this._phone = phone;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get address() {
        return this._address;
    }
    set address(value) {
        this._address = value;
    }
    get phone() {
        return this._phone;
    }
    set phone(value) {
        this._phone = value;
    }
    inputData() {
        this._id = Number(prompt("Enter id: "));
        this._name = String(prompt("Enter name: "));
        this._age = Number(prompt("Enter age: "));
        this._address = String(prompt("Enter address: "));
        this._phone = String(prompt("Enter phone: "));
    }
    displayData() {
        console.log(`Id: ${this._id}, Name: ${this._name}, Age: ${this._age}, Address: ${this._address}, Phone: ${this._phone}`);
    }
}
class StudentManager {
    constructor() {
        this.students = [];
    }
    createStudent() {
        let id = Number(prompt("Enter id: "));
        let name = String(prompt("Enter name: "));
        let age = Number(prompt("Enter age: "));
        let address = String(prompt("Enter address: "));
        let phone = String(prompt("Enter phone: "));
        let student = new Student(id, name, age, address, phone);
        this.students.push(student);
    }
    updateStudent(id) {
        let name = String(prompt("Enter name: "));
        let age = Number(prompt("Enter age: "));
        let address = String(prompt("Enter address: "));
        let phone = String(prompt("Enter phone: "));
        let student = new Student(id, name, age, address, phone);
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].id === id) {
                this.students[i] = student;
                break;
            }
        }
    }
    deleteStudent(id) {
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].id === id) {
                this.students.splice(i, 1);
                break;
            }
        }
    }
    displayAllStudents() {
        for (let i = 0; i < this.students.length; i++) {
            this.students[i].displayData();
        }
    }
}
let studentManager = new StudentManager();
let choice;
do {
    console.log("1. Create student");
    console.log("2. Update student");
    console.log("3. Delete student");
    console.log("4. Display all students");
    console.log("5. Exit");
    choice = Number(prompt("Enter your choice: "));
    switch (choice) {
        case 1:
            studentManager.createStudent();
            break;
        case 2:
            let id = Number(prompt("Enter id: "));
            studentManager.updateStudent(id);
            break;
        case 3:
            id = Number(prompt("Enter id: "));
            studentManager.deleteStudent(id);
            break;
        case 4:
            studentManager.displayAllStudents();
            break;
        case 5:
            break;
        default:
            console.log("Invalid choice");
    }
} while (choice !== 5);
// Compare this snippet from src/session4/ex3/index.ts:
