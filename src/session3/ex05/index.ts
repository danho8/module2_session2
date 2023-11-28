// Xây dựng lớp Employee gồm các thuộc tính như: mã nhân viên(employeeId), tên nhân viên (employeeName) , tuổi (age), giới tính (gen), hệ số lương(rate) và lương(salary). các phương thức khởi tạo (constructor) 0 tham số và có tham số, phương thức inputData() cho phép người dùng nhập vào toàn bộ thông tin của đối tượng trừ lương, phương thức displayData() cho phép hiển thị toàn bộ thông tin nhân viên, phương thức calSalary() cho phép tính lương nhân viên theo công thức salary = rate * 1.300.000 .

// Yêu cầu vẽ biểu đồ lớp UML Student trước khi triển khai.

// Bước 1: Tạo lớp Employee, khai báo các thuộc tính (properties), định nghĩa các phương thức khởi tạo (constructors).

// Bước 2: Tạo lớp Main chưa phương thức main() để chạy chương trình.

// Bước 3: Trong phương thức main() , khởi tạo 5 đối tượng nhân viên từ lớp Employee, tính lương và hiển thị toàn bộ thông tin các nhân viên ra màn hình.

// Bước 4: Chạy chương trình và quan sát kết quả.

class Employee {
  private _employeeId: number;
  private _employeeName: string;
  private _age: number;
  private _gen: string;
  private _rate: number;
  private _salary: number;

  constructor(
    employeeId: number,
    employeeName: string,
    age: number,
    gen: string,
    rate: number,
    salary: number
  ) {
    this._employeeId = employeeId;
    this._employeeName = employeeName;
    this._age = age;
    this._gen = gen;
    this._rate = rate;
    this._salary = salary;
  }

  get employeeId(): number {
    return this._employeeId;
  }

  set employeeId(value: number) {
    this._employeeId = value;
  }

  get employeeName(): string {
    return this._employeeName;
  }

  set employeeName(value: string) {
    this._employeeName = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get gen(): string {
    return this._gen;
  }

  set gen(value: string) {
    this._gen = value;
  }

  get rate(): number {
    return this._rate;
  }

  set rate(value: number) {
    this._rate = value;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    this._salary = value;
  }

  inputData() {
    this._employeeId = Number(prompt("Enter employee id: "));
    this._employeeName = String(prompt("Enter employee name: "));
    this._age = Number(prompt("Enter age: "));
    this._gen = String(prompt("Enter gen: "));
    this._rate = Number(prompt("Enter rate: "));
  }

  displayData() {
    console.log(
      `Employee id: ${this._employeeId}, Employee name: ${this._employeeName}, Age: ${this._age}, Gen: ${this._gen}, Rate: ${this._rate}, Salary: ${this._salary}`
    );
  }

  calSalary() {
    this._salary = this._rate * 1300000;
  }
}

let employee1 = new Employee(0, "", 0, "", 0, 0);
employee1.inputData();
employee1.calSalary();
employee1.displayData();
let employee2 = new Employee(0, "", 0, "", 0, 0);
employee2.inputData();
employee2.calSalary();
employee2.displayData();
