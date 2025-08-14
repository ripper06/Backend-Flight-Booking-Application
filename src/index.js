const express = require('express');

const {ServerConfig} = require('./config');
const apiRoutes = require('./routes');



const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api',apiRoutes);
app.use('/flightsService/api',apiRoutes);


const PORT = ServerConfig.PORT || 3000;


app.listen(PORT, async()=>{
    console.log(`Successfully server started on port : ${PORT}`); 
});