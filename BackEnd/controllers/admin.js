const adminModel = require('../models/user')
const crudHelper = require('../helpers/crud')

class Admin {
    async createCustomer(data){
        return crudHelper.CreateFunc(adminModel,data)
    }

    async getCustomerList(){
        return crudHelper.getData(adminModel,undefined)
    }

    async deleteCustomer(id){
        return crudHelper.deleteData(adminModel,id)
    }
}

module.exports = new Admin()