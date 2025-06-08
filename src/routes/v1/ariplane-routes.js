const express = require('express');
 const {AirplaneMiddlewares} = require('../../middlewares');
const { AirplaneController } = require('../../controllers')
const router = express.Router();

// /api/v1/airplanes -> POST req
router.post('/', 
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane
);

// /api/v1/airplanes -> GET req
router.get('/',
    AirplaneController.getAirplanes
);

// /api/v1/airplanes/id -> GET req
router.get('/:id',
    AirplaneController.getAirplane
);

router.delete('/:id',
    AirplaneController.destroyAirplane
)



module.exports = router;

