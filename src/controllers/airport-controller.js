const {StatusCodes} = require('http-status-codes')

const { AirportService } = require('../services');
const { response } = require('express');

const {ErrorResponse,SuccessResponse} = require('../utils/common');
const { getAirplanes } = require('./airplane-controller');


/*
*   POST : /airports
*   req-body {name:"IGI", code:"DEL", cityId: 5, address:"NewDelhi"}
*/
async function createAirport(req,res){
    try {
        const airport = await AirportService.createAirport({
            name : req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId : req.body.cityId,
        });
        SuccessResponse.data = airport;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse)
    }
}


/*
*   POST : /airports
*   req-body {}
*/
async function getAirports(req,res){
    try {

        const airports = await AirportService.getAirports();
        SuccessResponse.data = airports;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse)
    }
}


/*
*   POST : /airports/:id
*   req-body {}
*/
async function getAirport(req,res){
    try {
        const airport = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = airport;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse)
    }
}


/*
*   POST : /airplanes/:id
*   req-body {}
*/
async function destroyAirport(req,res){
    try {
        const response = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data = response;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse)
    }
}

// async function updateAirplane(req,res){
//     try {
//         const airplane = await AirplaneService.updateAirplane(
//             req.params.id, 
//             {
//                 modelNumber: req.body.modelNumber,
//                 capacity : req.body.capacity,
//             },
//         );
//         SuccessResponse.data = airplane;
//         return res
//                 .status(StatusCodes.OK)
//                 .json(SuccessResponse);

//     } catch (error) {
//         ErrorResponse.error = error;
//         return res
//                 .status(error.statusCode)
//                 .json(ErrorResponse)
//     }
// }


module.exports = {
    createAirport,
    getAirports,
    getAirport, 
    destroyAirport,
}