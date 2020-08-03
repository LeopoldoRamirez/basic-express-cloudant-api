const router = require('express').Router();
const {  getAllNotes, getNoteById, saveNote, 
         updateNote, deleteNote } = require('../controllers/note.controller');


router.get( '/', getAllNotes );

router.get( "/:id" , getNoteById);

router.post("/", saveNote );

router.put( "/:id" , updateNote);

router.delete( "/:id" , deleteNote);

module.exports = router;