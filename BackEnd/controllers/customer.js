const customerModel = require('../models/user')
const crudHelper = require('../helpers/crud')

class Customer {
    async addToCart(data){
        return crudHelper.CreateFunc(customerModel,data)
    }

    async getProductList(){
        return crudHelper.getData(customerModel,undefined)
    }

    async removeProduct(id){
        return crudHelper.deleteData(customerModel,id)
    }
}

module.exports = new Customer()