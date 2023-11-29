"use strict";
// Xây dựng class Student với các thông tin như sau:
// studentId (number)
// studentName (string)
// className (string)
// age (number)
// address (string)
// Tất cả thuộc tính có access modifier là private.
// Các phương thức getter/setter, constructor
// Phương thức inputData() cho phép nhập vào toàn bộ thông tin của đối tượng và displayData() hiển thị toàn bộ thông tin của đối tượng đó
// Bước 1: Tạo lớp Student với các thuộc tính và phương thức như mô tả.
// Bước 2: Tạo lớp StudentManager có:
// Thuộc tính students là mảng các sinh viên,
// Các phương thức tĩnh như :
// createStudent()
// updateStudent(id)
// showAllStudent()
// deleteStudent(id)
// Lần lượt là thêm mới, sửa, hiển thị danh sách và xóa sinh viên.
// Bước 3: Tạo một chương trình thực thi quản lý sinh viên
// Cho người dùng nhập vào các chữ cái C/R/U/D tương ứng với từng option ở dưới
// -Hiển thị danh sách sinh viên (C)
// Thêm mới sinh viên (R)
// Update thông tin sinh viên theo id (U)
// Xoá sinh viên theo id (D)
// Thoát (E)
// Sử dụng vòng lặp while để lặp đi lặp lại chương trình đến bao giờ người dùng nhập vào E (Exit)
class Students {
    constructor(studentId, studentName, className, age, address) {
        this._studentId = studentId;
        this._studentName = studentName;
        this._className = className;
        this._age = age;
        this._address = address;
    }
    get studentId() {
        return this._studentId;
    }
    set studentId(value) {
        this._studentId = value;
    }
    get studentName() {
        return this._studentName;
    }
    set studentName(value) {
        this._studentName = value;
    }
    get className() {
        return this._className;
    }
    set className(value) {
        this._className = value;
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
    inputData() {
        this.studentId = Number(prompt("Enter student id: "));
        this.studentName = String(prompt("Enter student name: "));
        this.className = String(prompt("Enter class name: "));
        this.age = Number(prompt("Enter age: "));
        this.address = String(prompt("Enter address: "));
    }
    displayData() {
        console.log("Student id: " + this.studentId);
        console.log("Student name: " + this.studentName);
        console.log("Class name: " + this.className);
        console.log("Age: " + this.age);
        console.log("Address: " + this.address);
    }
}
class StudentManagers {
    constructor() {
        this._students = [];
    }
    get students() {
        return this._students;
    }
    set students(value) {
        this._students = value;
    }
    createStudent() {
        let student = new Students(0, "", "", 0, "");
        student.inputData();
        this.students.push(student);
    }
    updateStudent(id) {
        let student = new Students(0, "", "", 0, "");
        student.inputData();
        this.students[id] = student;
    }
    showAllStudent() {
        for (let i = 0; i < this.students.length; i++) {
            this.students[i].displayData();
        }
    }
    deleteStudent(id) {
        this.students.splice(id, 1);
    }
}
let studentManagers = new StudentManagers();
let option = "";
while (option != "E") {
    option = String(prompt("Enter option: "));
    switch (option) {
        case "C":
            studentManagers.createStudent();
            break;
        case "R":
            studentManagers.showAllStudent();
            break;
        case "U":
            let id = Number(prompt("Enter id: "));
            studentManagers.updateStudent(id);
            break;
        case "D":
            let id1 = Number(prompt("Enter id: "));
            studentManagers.deleteStudent(id1);
            break;
        case "E":
            break;
        default:
            console.log("Wrong option");
            break;
    }
}
