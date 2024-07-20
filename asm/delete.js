const axios = require('axios');

const deleteProduct = async (id) => {
    try {
        await axios.delete(`http://localhost:3000/products/${id}`);
        console.log('delete successfully');
    } catch (error) {
        console.error(error);
    }
}

deleteProduct(4);