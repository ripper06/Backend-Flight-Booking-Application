const airplane = require('../models/airplane');
const CrudRepository = require ('./crud-repository');
const {Airplane} = require('../models');

class AirPlaneRepository extends CrudRepository{
    constructor(){
        super(Airplane);
    }

   
}

module.exports = AirPlaneRepository;