const {StatusCodes} = require('http-status-codes');

const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');
 
function validateCreateRequest(req, res, next){

    if(!req.body.modelNumber && !req.body.capacity){
        ErrorResponse.message = 'Something went wrong while creating an airplane...';
        ErrorResponse.error = new AppError(['Model number and capacity both are not found in the incoming request in the expected correct format...'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }

    if(!req.body.modelNumber){
        ErrorResponse.message = 'Something went wrong while creating an airplane...';
        ErrorResponse.error = new AppError(['Model number is not found in the incoming request in the expected correct format...'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }

    if(!req.body.capacity){
        ErrorResponse.error = new AppError(['Capacity is not found in the incoming request in the expected correct format...'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    next();
}

module.exports = {
    validateCreateRequest,
}