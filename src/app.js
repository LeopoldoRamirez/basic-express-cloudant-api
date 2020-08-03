const express = require('express');
const router = require('./routers/index.route');
const { appPort } = require('./config');

require('./database');

async function init(){
    
    const app = express();
    
    //middlewares    
    app.use( express.json() );
    app.use( express.urlencoded({ extended: false} ) );

    //routes
    app.use(router);    

    app.listen( appPort, ()=>{        
        console.log( `Application is running on port ${appPort} ` );
    });
}


module.exports = {
    init
}