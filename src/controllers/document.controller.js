const { buildResponse } = require('./controllerUtils');
const { getConnection } = require('../database');
const uuid4  =  require('uuid4') ;

const getAllDocuments = async( request, response )=>{
    
    try {
        const connection = getConnection();

        const notes = await connection.list({include_docs:true});

        return buildResponse( response, 200, notes );
    } catch (error) {
        return buildResponse( response, 500, {} ); ;    
    }

}

const getDocumentById = async(request, response)=>{
    const {id} = request.params;

    try {
        const connection =getConnection();
        const note =  await connection.get( id )

        return buildResponse( response, 200, { msg: "get note by id" , note });
    } catch (error) {
        console.error(error);
        return buildResponse( response, 500, {} ); ;    
    }
}

const getDocsByPartition = async( request, response )=>{
    const {partitionId} = request.params;
    
    try {
        const connection = getConnection();

        const docsByPartion = await connection.partitionedList( partitionId, {include_docs:true} );

        return buildResponse( response, 200, { msg: "Docs by partition", docsByPartion  } );
    } catch (error) {
        return buildResponse( response, 500, {} );
    }
}


const saveDocument = async( request, response )=>{
    const {partitionId} = request.params;
    const key = uuid4();

    console.log(`key is ${key}`);

    const noteData = request.body;

    noteData['_id'] = [ partitionId, key ].join(":");

    
    console.log( noteData );

    try {
        const connection = getConnection();
        const createdNote = await connection.insert( noteData );

        return buildResponse( response, 201, {msg:"note saved", createdNote });
    } catch (error) {
        console.error(error);
        return buildResponse( response, 500, {} ); ;    
    }
}

//for bulk operations
const saveDocsByPartition = async(request, response )=>{

    //we get the partition
    const {partitionId} = request.params; 

    // we spect an array of notes in request
    const docs = request.body;

    //generate the id
    docs.forEach( doc => {
        const key = uuid4();
        doc._id = [ partitionId, key  ].join(":");
    });

    try {
        const connection = getConnection();

        const resultset = await connection.bulk({docs});

        return buildResponse( response, 201, { msg: "created", resultset } );
    } catch (error) {
        console.log(error);
        return buildResponse( response, 500, {} ); ;
    }

}


const updateDocument = async(request, response)=>{
    const {id} = request.params;
    const sentData = request.body;

    try {
        const connection = getConnection();
        const revision = await connection.get(id);
        const document ={
            ... revision,
            ... sentData
        };

        const resultset = await connection.insert(document);

        return buildResponse( response, 200, {msg: "note updated", resultset} );
    } catch (error) {
        return buildResponse( response, 500, {} ); ;    
    }
}


const deleteDocument = async( request, response )=>{
    const {id} = request.params;

    try {
        const connection = getConnection();
        const revision = await connection.get(id);
        const { _id, _rev } = revision;


        const resultset = await connection.destroy( _id, _rev );

        return buildResponse( response, 200, { msg: "note deleted",  resultset } );
    } catch (error) {
        console.error(error);
        return buildResponse( response, 500, {} ); ;    
    }
}

module.exports = {
    getAllDocuments,
    getDocumentById,
    updateDocument,
    deleteDocument,
    saveDocument,    
    getDocsByPartition,
    saveDocsByPartition
}