const {CityRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');
const {StatusCodes} = require('http-status-codes')

const cityRepository = new CityRepository();

async function createCity(data){
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {

        if(error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError'){
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.value + " : " + err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        }
        throw new AppError('Canot create a new city object', StatusCodes.BAD_REQUEST)
    }
}

async function destroyCity(id){
    try {
        
        const response = await cityRepository.destroy(id);
        return response;

    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The city you requested to delete is not present', error.statusCode);
        }
        throw new AppError('Canot fetch data of the city...', StatusCodes.BAD_REQUEST)
    }
}

async function updateCity(id,data){
    try {
        const response = await cityRepository.update(id,data);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The city you requested to delete is not present', error.statusCode);
        }
        throw new AppError('Canot fetch data of the city...', StatusCodes.BAD_REQUEST)
    }
}

module.exports = {
    createCity,
    destroyCity,
    updateCity,
}