const express = require('express');

const {ServerConfig} = require('./config');
const apiRoutes = require('./routes')


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api',apiRoutes);



app.listen(ServerConfig.PORT, async()=>{
    console.log(`Successfully server started on port : ${ServerConfig.PORT}`); 
    
    //ADDITIONAL FEATURES GIVEN BY SEQELIZE

    const {City,Airport} = require('./models');
    const delhi = await City.findByPk(1);
    console.log(delhi);

    //const airport = await Airport.create({name : "Indira Gandhi International Airport", code : "DEL", cityId : 1});
    //const Del = await delhi.createAirport({name : "Indira Gandhi International Airport", code:"DEL"});
    // console.log(safdarjung);

    // const airportsinDel = await delhi.getAirports();
    // console.log(airportsinDel);

    // const VIDDairport = await Airport.findByPk(7);
    // await delhi.removeAirport(VIDDairport);
    await City.destroy({
        where : {
            id : 1
        }
    })
});