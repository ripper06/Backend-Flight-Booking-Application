const {AirPlaneRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');
const {StatusCodes} = require('http-status-codes')

const airPlaneRepository = new AirPlaneRepository();

async function createAirplane(data){
    try {
        const airplane = await airPlaneRepository.create(data);
        return airplane;
    } catch (error) {
    
        if(error.name == 'SequelizeValidationError'){
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        }
        throw new AppError('Canot create a new Airplane object', StatusCodes.BAD_REQUEST)
    }
}

async function getAirplanes(){
    try {
        
        const airplanes = await airPlaneRepository.getAll();
        return airplanes;

    } catch (error) {
        throw new AppError('Canot fetch data of all airplanes...', StatusCodes.BAD_REQUEST)
    }
}

async function getAirplane(id){
    try {
        
        const airplane = await airPlaneRepository.get(id);
        return airplane;

    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you requested is not present', error.statusCode);
        }
        throw new AppError('Canot fetch data of the airplane...', StatusCodes.BAD_REQUEST)
    }
}

async function destroyAirplane(id){
    try {
        
        const response = await airPlaneRepository.destroy(id);
        return response;

    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you requested to delete is not present', error.statusCode);
        }
        throw new AppError('Canot fetch data of all airplanes...', StatusCodes.BAD_REQUEST)
    }
}

async function updateAirplane(id,data){
    try {
        const response = await airPlaneRepository.update(id,data);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The city you requested to delete is not present', error.statusCode);
        }
        throw new AppError('Canot fetch data of the city...', StatusCodes.BAD_REQUEST)
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane,
}