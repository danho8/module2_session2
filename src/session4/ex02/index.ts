// Khởi tạo một class Car bao gồm các thuộc tính

// brand (string)

// price (number)

// color (string)

// category (string)

// Tất cả thuộc tính có access modifier là private.

// Các phương thức getter/setter, constructor

// Phương thức inputData() cho phép nhập vào toàn bộ thông tin của đối tượng (sử dụng prompt)

// Phương thức displayData() hiển thị toàn bộ thông tin của đối tượng theo table

// Bước 1: Tạo lớp Car với các thuộc tính và phương thức như mô tả.

// Bước 2: Tạo lớp CarManager có:

// Thuộc tính cars là mảng chứa các đối tượng (instance) được khởi tạo từ lớp Car,

// Các phương thức tĩnh như :

// createCar()

// updateCar(id)

// showAllCar()

// deleteCar(id)

// Lần lượt là thêm mới, sửa, hiển thị danh sách và xóa ô tô.
// Bước 3: Tạo một chương trình thực thi quản lý ô tô

// Cho người dùng nhập vào các chữ cái C/R/U/D tương ứng với từng option ở dưới

// Hiển thị danh sách ô tô (R)

// Thêm mới ô tô (C)

// Update thông tin ô tô theo id (U)

// Xoá ô tô theo id (D)

// Thoát (E)

// Sử dụng vòng lặp while để lặp đi lặp lại chương trình đến bao giờ người dùng nhập vào E (Exit)

class Car {
  private _brand: string;
  private _price: number;
  private _color: string;
  private _category: string;

  constructor(brand: string, price: number, color: string, category: string) {
    this._brand = brand;
    this._price = price;
    this._color = color;
    this._category = category;
  }

  get brand(): string {
    return this._brand;
  }

  set brand(value: string) {
    this._brand = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  get category(): string {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
  }

  inputData() {
    this.brand = String(prompt("Nhập tên xe: "));
    this.price = Number(prompt("Nhập giá xe: "));
    this.color = String(prompt("Nhập màu xe: "));
    this.category = String(prompt("Nhập loại xe: "));
  }

  displayData() {
    console.log(
      `| ${this.brand} | ${this.price} | ${this.color} | ${this.category} |`
    );
  }
}

class CarManager {
  private _cars: Car[] = [];

  createCar() {
    let car = new Car("", 0, "", "");
    car.inputData();
    this._cars.push(car);
  }

  updateCar(id: number) {
    let car = this._cars[id];
    car.inputData();
  }

  showAllCar() {
    console.log("| Brand | Price | Color | Category |");
    let dataTableElement = document.getElementById("data-table") as HTMLElement;
    dataTableElement.innerHTML = "";
    this._cars.forEach((car) => {
        // car.displayData();
        dataTableElement.innerHTML += `
                <tr>
                    <td>${car.brand}</td>
                    <td>${car.price}</td>
                    <td>${car.color}</td>
                    <td>${car.category}</td>
                </tr>
            `;
    
    });
  }

  deleteCar(id: number) {
    this._cars.splice(id, 1);
  }
}

let carManager = new CarManager();
let options: string = "";
while (options != "E") {
  options = String(prompt("Enter option: "));
  switch (option) {
    case "C":
      carManager.createCar();
      break;
    case "R":
      carManager.showAllCar();
      break;
    case "U":
      let id = Number(prompt("Enter id: "));
      carManager.updateCar(id);
      break;
    case "D":
      let id1 = Number(prompt("Enter id: "));
      carManager.deleteCar(id1);
      break;
  }
}
