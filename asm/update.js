const axios = require('axios');

const update = async (id) => {
    //lấy dữ liệu để update
    var updatedProduct = {
        "cate_id": 2,
        "name": "test updated product",
        "price": 888888,
        "detail": "updated thông tin chi tiết",
        "image": "https://picsum.photos/100"
    }
    try {
        //tương tự như post, nhận vào 2 tham số là apiUrl và data
        await axios.put(`http://localhost:3000/products/${id}`,updatedProduct);
        console.log('updated successfully');
    } catch (error) {
        console.error(error);
    }
}

update(2);