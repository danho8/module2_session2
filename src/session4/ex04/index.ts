// Bước 1: Tạo phương thức push()
//  – Thêm một node vào cuối danh sách Linked List .

// Phương thức này nên nhận vào 1 tham số là 1 value của Node.

// Tạo một Node mới sử dụng giá trị được truyền vào hàm.

// Nếu không có thuộc tính "head" trong danh sách, Tạo ra "head" === "tail" trong danh sách là Node đầu tiên trong danh sách

// Nếu đã có head, thiết lập thuộc tính "next" trên "tail" là node mới và thiết lập thuộc tính "tail" trên danh sách để là node mới đã được tạo.

// Tăng độ dài lên 1 đơn vị.

// Trả về danh sách liên kết đã được cập nhật.

// Bước 2: Tạo phương thức pop() – Xóa một node cuối danh sách Linked List.

// Nếu không có node nào trong danh sách, trả về undefined.

// Lặp qua danh sách cho đến khi đến node cuối.

// Thiết lập thuộc tính "next" của node thứ hai từ cuối thành null.

// Thiết lập "tail" của danh sách thành node thứ hai từ cuối.

// Giảm độ dài của danh sách đi 1 đơn vị.

// Trả về giá trị của node đã được loại bỏ.

// Bước 3: Tạo phương thức shift() – Xóa một node cuối danh sách Linked List .

// Nếu không có node nào trong danh sách, trả về undefined.

// Lưu trữ thuộc tính "head" hiện tại vào một biến current_head.

// Thiết lập thuộc tính "head" của danh sách hiện tại bằng với giá trị của thuộc "next" của "current_head" hiện tại.

// Giảm độ dài của danh sách đi 1.

// Trả về giá trị của node đã được loại bỏ.

// Bước 4: Tạo phương thức unshift() – Thêm một node vào đầu danh sách Linked List .

// Phương thức này nên nhận vào 1 tham số là 1 value của Node.

// Tạo một Node mới sử dụng giá trị được truyền vào hàm.

// Nếu không có thuộc tính "head" trong danh sách, Tạo ra "head" === "tail" trong danh sách là Node đầu tiên trong danh sách

// Nếu đã có head, thiết lập thuộc tính "next" của node mới vừa tạo với giá trị của head hiện tại

// Thiết lập thuộc tính “head” của danh sách thành node mới tạo

// Tăng độ dài lên 1 đơn vị.

// Trả về danh sách liên kết đã được cập nhật.

// Bước 5: Tạo phương thức get() – Truy xuất vào một node dựa vào vị trí index của node đó trong danh sách Linked List .

// Phương thức này nhận vào một chỉ số của phần tử cần truy xuất.

// Nếu chỉ số nhỏ hơn 0 hoặc lớn hơn hoặc bằng độ dài của danh sách, trả về null.

// Lặp qua danh sách cho đến khi đạt đến chỉ số và trả về node ở chỉ số đó.

// Bước 6: Tạo phương thức set() – Thay đổi giá trị của một node dựa vào vị trí index của danh sách Linked List .

// Phương thức này nhận vào tham số là chỉ số và giá trị cần thay đổi cho node tại vị trí đó.

// Sử dụng hàm "get" để tìm node cụ thể.

// Nếu không tìm thấy node, trả về false.

// Nếu tìm thấy node, thiết lập giá trị của node đó thành giá trị được truyền vào hàm và trả về true.

// Bước 7: Tạo phương thức insert(index, val) – Thêm một node vào trong danh sách Linked List  dựa vào vị trí index.

// Nếu chỉ số nhỏ hơn 0 hoặc lớn hơn độ dài, trả về false.

// Nếu chỉ số bằng với độ dài, thêm một node mới vào cuối danh sách (sử dụng phương thức push).

// Nếu chỉ số là 0, thêm một node mới vào đầu danh sách (sử dụng phương thức unshift).

// Ngược lại, sử dụng phương thức get để truy cập node ở chỉ số (index - 1).

// Thiết lập thuộc tính "next" trên node đó thành node mới.

// Thiết lập thuộc tính "next" trên node mới thành node kế tiếp ban đầu.

// Tăng độ dài lên 1.

// Trả về true.

// Bước 8: Tạo phương thức remove() – Xóa một node dựa vào vị trí index của node đó trong của danh sách Linked List .

// Bước 9: Tạo phương thức reverse() – Đảo ngược vị trí của các node trong danh sách Linked List .

type NodeType = string | number | null;

class SLLNode {
  private val: NodeType;
  private next: NodeType;
  constructor(val: NodeType) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  private head: NodeType;
  private tail: NodeType;
  private length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  private push(val: NodeType): SinglyLinkedList {
    var newNode = new SLLNode(val);

    if(!this.head) {
        this.head=this.tail;        
    } else {
        
    }



    // Logic here

    return this;
  }

  private pop(): NodeType {
    var current = this.head;
    // Logic here

    return current;
  }
  private shift() {
    var currentHead = this.head;
    // Logic here

    return currentHead;
  }
  private unshift(val: NodeType): SinglyLinkedList {
    var newNode = new SLLNode(val);
    // Logic here

    return this;
  }
  private get(index: number): NodeType {
    if (index < 0 || index >= this.length) return null;
    var current = this.head;
    // Logic here

    return current;
  }
  private set(index: number, val: NodeType): boolean {
    var foundNode = this.get(index);
    // Logic here

    return false;
  }
  private insert(index: number, val: NodeType): boolean {
    // Logic here

    return true;
  }
  // declare return type
  private remove(index: number) {
    // Logic here
    //
    // return removed node
  }
  private reverse(): SinglyLinkedList {
    // Logic here

    return this;
  }
  private print(): void {
    var arr: SLLNode[] = [];
    // Logic here

    console.log(arr);
  }
}
