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

module.exports = {
    createAirplane,
    getAirplanes,
}