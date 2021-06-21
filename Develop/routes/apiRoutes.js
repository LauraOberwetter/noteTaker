const fs = require("fs"); //required here and in storedNote....not sure if both are needed
const router = require('express').Router();
const storedNote = require('../db/storedNote'); //class from storedNote.js

//get /notes
router.get("/notes", (req, res) => { // making the endpoint
    storedNote
    .getStoredNote()
    .then((data) => {
      console.log(data);
      return res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//post /notes
router.post("/notes", (req, res) => { // making the endpoint
    storedNote
    .addNote(req.body)
    .then((data) => {
      console.log(data);
      return res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//date /notes (bonus if extra time)

//export router
module.exports = router;