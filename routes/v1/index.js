const express = require ('express');

const { InfoController } = require('../../controllers')

const airplaneRoutes = require('./ariplane-routes');
const cityRoutes = require('./city-routes')

const router = express.Router();

router.use('/airplanes', airplaneRoutes);
router.use('/cities', cityRoutes);

//info-controller
router.get('/info', InfoController.info);

module.exports = router;