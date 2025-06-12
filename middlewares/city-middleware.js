const {StatusCodes} = require('http-status-codes');

const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');
 
function validateCreateCity(req, res, next){

    if(!req.body.name){
        ErrorResponse.message = 'Something went wrong while creating the city...'
        ErrorResponse.error = new AppError(['City name is not found in the incoming request in the expected correct format...'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    next();
}

function validateUpdateCity(req,res,next){
    const value = req.body.name;
    const regex = /^[A-Za-z\s]+$/;

     if(!value){
        ErrorResponse.message = 'Something went wrong while updating the city...'
        ErrorResponse.error = new AppError(['City name is not found...'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }

    if(!regex.test(value)){
        ErrorResponse.message = 'Something went wrong while updating the city...'
        ErrorResponse.error = new AppError(['City name should only contain alphabets...'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }

    next();
}

module.exports = {
    validateCreateCity,
    validateUpdateCity,
}