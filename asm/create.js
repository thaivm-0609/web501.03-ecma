const axios = require('axios');
const create = async () => {
    //newProduct (json)
    var newProduct = {
        "cate_id": 1,
        "name": "test new product",
        "price": 1000000,
        "detail": "đây là thông tin chi tiết",
        "image": "https://picsum.photos/200"
    }
    try {
        //.post cần 2 tham số: 1 là apiUrl, 2 là data (dữ liệu đẩy lên)
        await axios.post('http://localhost:3000/products',newProduct);
        console.log('create successfully');
    } catch (error) {
        console.error(error);
    }
}
create(); //gọi hàm