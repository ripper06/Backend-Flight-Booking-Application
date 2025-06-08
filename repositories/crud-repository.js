const {Logger} = require('../config');

class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
       
            const response = await this.model.create(data);
            return response;
        
    }

    async destroy(data){
        try {
            const response = await this.model.destroy({
                where: {
                    id: data,
                }
            });
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the Crud Repo : create');
            throw error;
        }
    }

    async get(data){
        try {
            const response = await this.model.findByPK(data);
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the Crud Repo : create');
            throw error;
        }
    }


    async getAll(data){
        try {
            const response = await this.model.findAll(data);
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the Crud Repo : create');
            throw error;
        }
    }

    async update(id, data){//data -> object {col: value, ...}
        try {
            const response = await this.model.update(data, {
                where : {
                    id: id
                }
            });
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the Crud Repo : create');
            throw error;
        }
    }
}

module.exports = CrudRepository;