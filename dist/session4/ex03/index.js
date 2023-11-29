"use strict";
// Mô phỏng quá trình mua hàng của khách tại một cửa hàng bánh bakery.
// Khởi tạo một class Product bao gồm các thuộc tính
// id (number)
// name (string)
// price (number)
// quantity (number)
// Tất cả thuộc tính có access modifier là private.
// Các phương thức getter/setter, constructor
// Phương thức inputData() cho phép nhập vào toàn bộ thông tin của đối tượng (sử dụng prompt)
// Phương thức displayData() hiển thị toàn bộ thông tin của đối tượng đó theo dạng
// Id: 1
// Name: Chocolate
// Price: 45000
// Quantity: 100
// Bước 1: Tạo lớp Product với các thuộc tính và phương thức như mô tả.
// Bước 2: Tạo lớp Bakery có:
// Thuộc tính products là mảng chứa các đối tượng (instance) được khởi tạo từ lớp Product,
// Các phương thức tĩnh như :
// createProduct()
// updateProduct(id)
// showAllProduct()
// deleteProduct(id)
// Lần lượt là thêm mới, sửa, hiển thị danh sách và xóa sản phẩm khỏi cửa hàng Bakery.
// Bước 3: Tạo lớp Cart có:
// Thuộc tính cart là mảng chứa các đối tượng (instance) được khởi tạo từ lớp Product,
// Các phương thức tĩnh như :
// addToCart(product)
// updateCart(id, quantity)
// showAllCart()
// deleteCart(id)
// Lần lượt là thêm mới, sửa, hiển thị danh sách và xóa các sản phẩm trong cart.
// Tạo sẵn một mảng cart rỗng tương ứng với giỏ hàng của khách lúc mới đến cửa hàng chưa mua gì
// Bước 4:
// In ra toàn bộ sản phẩm có trong bakery theo dạng
// —--------------
// Id: 1
// Name: Chocolate
// Price: 45000
// Quantity: 100
// —--------------
// Id: 2
// Name: Cookies
// Price: 90000
// Quantity: 100
// —--------------
// ...
// Bước 5:
// Cho người dùng nhập vào sản phẩm muốn mua thông qua tên sản phẩm
// Bước 6:
// Tiến hành kiểm tra xem sản phẩm người dùng vừa nhập vào có nằm trong cửa hàng không
// Nếu không có → In ra câu “We don’t have that item”
// Nếu có → Làm tiếp bước 5
// Bước 7:
// Tiến hành kiểm tra xem sản phẩm đã có trong giỏ hàng của khách chưa.
// Nếu chưa có → Thêm sản phẩm đó vào giỏ hàng với dạng
// Nếu có rồi → Tăng số lượng của sản phẩm đó lên 1 đơn vị
// Bước 8:
// Biến chương trình thành một vòng lặp vĩnh cửu
// Sau mỗi lần add xong sản phẩm vào cart → Hỏi người dùng có muốn tiếp tục mua hàng hay không (yes/no)
// Nếu có → tiếp tục quay trở lại bước 1
// Nếu không → kết thúc chương trình → In ra câu “Thank you for buying”
class Product {
    constructor(id, name, price, quantity) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._quantity = quantity;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get price() {
        return this._price;
    }
    get quantity() {
        return this._quantity;
    }
    set quantity(value) {
        this._quantity = value;
    }
    inputData() {
        this._id = Number(prompt("Enter id: "));
        this._name = String(prompt("Enter name: "));
        this._price = Number(prompt("Enter price: "));
        this._quantity = Number(prompt("Enter quantity: "));
    }
    displayData() {
        console.log(`Id: ${this._id}`);
        console.log(`Name: ${this._name}`);
        console.log(`Price: ${this._price}`);
        console.log(`Quantity: ${this._quantity}`);
    }
}
class Bakery {
    constructor(products) {
        this._products = products;
    }
    get products() {
        return this._products;
    }
    set products(value) {
        this._products = value;
    }
    createProduct() {
        const product = new Product(0, "", 0, 0);
        product.inputData();
        this._products.push(product);
    }
    updateProduct(id) {
        const product = this._products.find((product) => product.id === id);
        if (product) {
            product.inputData();
        }
        else {
            console.log("Product not found");
        }
    }
    showAllProduct() {
        this._products.forEach((product) => product.displayData());
    }
    deleteProduct(id) {
        const index = this._products.findIndex((product) => product.id === id);
        if (index !== -1) {
            this._products.splice(index, 1);
        }
        else {
            console.log("Product not found");
        }
    }
}
class Cart {
    constructor(cart) {
        this._cart = cart;
    }
    get cart() {
        return this._cart;
    }
    set cart(value) {
        this._cart = value;
    }
    addToCart(product) {
        const index = this._cart.findIndex((item) => item.id === product.id);
        if (index === -1) {
            this._cart.push(product);
        }
        else {
            this._cart[index].quantity++;
        }
    }
    updateCart(id, quantity) {
        const index = this._cart.findIndex((item) => item.id === id);
        if (index !== -1) {
            this._cart[index].quantity = quantity;
        }
        else {
            console.log("Product not found");
        }
    }
    showAllCart() {
        this._cart.forEach((product) => product.displayData());
    }
    deleteCart(id) {
        const index = this._cart.findIndex((item) => item.id === id);
        if (index !== -1) {
            this._cart.splice(index, 1);
        }
        else {
            console.log("Product not found");
        }
    }
}
const products = [
    new Product(1, "Chocolate", 45000, 100),
    new Product(2, "Cookies", 90000, 100),
    new Product(3, "Cupcake", 10000, 100),
    new Product(4, "Bread", 5000, 100),
    new Product(5, "Muffin", 20000, 100),
];
const bakery = new Bakery(products);
const cart = new Cart([]);
while (true) {
    const userInput = prompt("Enter product name: ");
    const product = bakery.products.find((product) => product.name === userInput);
    if (product) {
        cart.addToCart(product);
    }
    else {
        console.log("We don't have that item");
    }
    const userChoice = prompt("Do you want to continue (yes/no): ");
    if (userChoice === "no") {
        break;
    }


}
cart.showAllCart();
console.log("Thank you for buying");
