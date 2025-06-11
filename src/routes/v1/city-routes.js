const express = require('express');
 
const { CityController } = require('../../controllers')
const {CityMiddlewares} = require('../../middlewares')

const router = express.Router();

// /api/v1/cities -> POST req
router.post('/',
    CityMiddlewares.validateCreateCity,   
    CityController.createCity
);

// /api/v1/cities/:id -> delete req
router.delete('/:id',
    CityController.destroyCity,
)

router.patch('/:id',
    CityMiddlewares.validateUpdateCity,
    CityController.updateCity
)

module.exports = router;

