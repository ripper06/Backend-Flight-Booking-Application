const express = require('express');
 const {AirportMiddleware} = require('../../middlewares');
const { AirportController } = require('../../controllers')
const router = express.Router();

// /api/v1/airports -> POST req
router.post('/', 
    AirportMiddleware.validateCreateRequest,
    AirportController.createAirport
);

// /api/v1/airports -> GET req
router.get('/',
    AirportController.getAirports
);

// /api/v1/airports/id -> GET req
router.get('/:id',
    AirportController.getAirport
);

// /api/v1/airports/id -> DELETE req
router.delete('/:id',
    AirportController.destroyAirport
)

module.exports = router;

