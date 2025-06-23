const {AirportRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');
const {StatusCodes} = require('http-status-codes')

const airportRepository = new AirportRepository();

async function createAirport(data){
    try {
        const airport = await airportRepository.create(data);
        return airport;
    } catch (error) {
    
        if(error.name == 'SequelizeValidationError'){
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        }
        throw new AppError('Canot create a new Airport object', StatusCodes.BAD_REQUEST)
    }
}

async function getAirports(){
    try {
        
        const airports = await airportRepository.getAll();
        return airports;

    } catch (error) {
        throw new AppError('Canot fetch data of all airports...', StatusCodes.BAD_REQUEST)
    }
}

async function getAirport(id){
    try {
        
        const airport = await airportRepository.get(id);
        return airport;

    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The airport you requested is not present', error.statusCode);
        }
        throw new AppError('Canot fetch data of the airport...', StatusCodes.BAD_REQUEST)
    }
}

async function destroyAirport(id){
    try {
        
        const response = await airportRepository.destroy(id);
        return response;

    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The airport you requested to delete is not present', error.statusCode);
        }
        throw new AppError('Canot fetch data of all airports...', StatusCodes.BAD_REQUEST)
    }
}

// async function updateAirport(id,data){
//     try {
//         const response = await airPlaneRepository.update(id,data);
//         return response;
//     } catch (error) {
//         if(error.statusCode == StatusCodes.NOT_FOUND){
//             throw new AppError('The city you requested to delete is not present', error.statusCode);
//         }
//         throw new AppError('Canot fetch data of the city...', StatusCodes.BAD_REQUEST)
//     }
// }

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
}