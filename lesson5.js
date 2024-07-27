//tạo 1 class sinh viên:
class SinhVien {
    // + khai báo thuộc tính Họ tên, ngày tháng năm sinh, chuyên ngành
    constructor(hoten,dob,major) {
        this.hoten = hoten
        this.dob = dob
        this.major = major
    }
    // + khai báo 1 hàm hiển thị thông tin sinh viên
    displayInfo() {
        console.log(`Họ tên: ${this.hoten}`)
        console.log(`Ngày sinh: ${this.dob}`)
        console.log(`Chuyên ngành: ${this.major}`)
    }
}

//Khởi tạo 1 biến dựa trên class sinh viên (thông tin cá nhân)
var thaivm2 = new SinhVien('Vương Minh Thái', 'xx/xx/xxxx', 'CNTT');
thaivm2.displayInfo(); //gọi hàm displayInfo() để hiển thị thông tin