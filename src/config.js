const dotenv = require('dotenv');
dotenv.config();


/**
 * Define all variables you need for your application
 */
module.exports = {
    appPort : process.env.APPLICATION_PORT || 8080,
    cloudantUrl : process.env.CLOUDANT_URL,
    cloudantApiKey : process.env.CLOUDANT_API_KEY,
    cloudantDataBase : process.env.CLOUDANT_DATABASE    
}
