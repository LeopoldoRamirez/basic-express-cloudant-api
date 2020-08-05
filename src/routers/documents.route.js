const router = require('express').Router();

const {  getAllDocuments, getDocumentById,  
         saveDocument, updateDocument,deleteDocument,
         getDocsByPartition, saveDocsByPartition } = require('../controllers/document.controller');

router.get( '/',  getAllDocuments);

router.get( "/:id" ,getDocumentById );
router.put( "/:id" ,updateDocument );
router.delete( "/:id" , deleteDocument);

router.post("/:partitionId", saveDocument );


router.get( "/partition/:partitionId", getDocsByPartition );
router.post("/particion/bulk/:partitionId", saveDocsByPartition );

module.exports = router;