const router = require('express').Router();
const {  getAllNotes, getNoteById, getNotesByPartition,
        saveNote, saveManyNotes,
         updateNote, deleteNote } = require('../controllers/note.controller');


router.get( '/', getAllNotes );

router.get( "/:id" , getNoteById);

router.get( "/partition/:partitionId" , getNotesByPartition);

router.post("/", saveNote );

router.post("/bulk", saveManyNotes );

router.put( "/:id" , updateNote);

router.delete( "/:id" , deleteNote);

module.exports = router;