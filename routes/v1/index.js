const express = require ('express');

const { InfoController } = require('../../controllers')

const airplaneRoutes = require('./ariplane-routes');

const router = express.Router();

router.use('/airplanes', airplaneRoutes);

//info-controller
router.get('/info', InfoController.info);

module.exports = router;