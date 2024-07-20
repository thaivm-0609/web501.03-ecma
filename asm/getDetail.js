const axios = require('axios'); //require axios

const getDetail = async (id) => { //khai báo hàm lấy thông tin chi tiết
    try {
        var response = await axios.get(`http://localhost:3000/products/${id}`); //call api
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getDetail(2);