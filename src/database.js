const { cloudantUrl, cloudantApiKey, cloudantDataBase } = require( './config' );
const Cloudant = require('@cloudant/cloudant');

const cloudant = Cloudant({
        url: cloudantUrl,
        plugins:{
            iamauth:{ iamApiKey : cloudantApiKey }
        }
});

console.log(`Cloudant connection created`);
console.log(`Database is set`);

const getConnection = ()=>{
    const connection = cloudant.db.use( cloudantDataBase );
    return connection;
}

module.exports = {
    getConnection
};