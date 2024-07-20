const axios = require('axios');
//promise
axios.get('http://localhost:3000/products')
    .then(response => { //nếu gửi request thành công
        console.log(response.data);
    })
    .catch(error => { //nếu có lỗi xảy ra
        console.error(error);
    })
//async/await
const getList = async () => { //khai báo hàm getList
    try {
        var response = await axios.get('http://localhost:3000/products');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
getList(); //gọi hàm 