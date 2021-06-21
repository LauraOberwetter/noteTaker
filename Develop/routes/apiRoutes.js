const fs = require("fs");
const router = require('express').Router();
const storedNote = require('../db/storedNote'); //use this if making seperate store.js file for data

//GET notes
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

//POST notes
router.post("/notes", (req, res) => { // making the endpoint
    storedNote
    .addNote()
    .then((data) => {
      console.log(data);
      return res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//DELETE notes

//export router
module.exports = router;