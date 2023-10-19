
class Crud{
    async CreateFunc(model,data){
            try {
                let response = await model.create(data)
                return {
                    data: response,
                    message: "Data successfully added!",
                    status: 200,
                }
            } catch (error) {
                return {
                    data: [],
                    message: "Error occured!",
                    error: error,
                    status: 400,
                }
            }
        
    }

    async getData(model,id){
        try {
               let response = await model.find()
               return {
                    data: response,
                    message: "List fetch successfully!",
                    status: 200,
                }
        } catch (error) {
            return {
                data: [],
                message: "Error occured!",
                error: error,
                status: 400,
            }
        }
        
    }

    async deleteData(model,id){
            try {
                let response = await model.deleteOne({ '_id': id })
                return {
                    data: response,
                    message: "Deleted successfully!",
                    status: 200,
                }
            } catch (error) {
                return {
                    data: [],
                    message: "Error occured!",
                    error: error,
                    status: 400,
                }
            }
        
    }
}

module.exports = new Crud()