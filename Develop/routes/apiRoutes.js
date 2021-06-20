const fs = require("fs");
const router = require('express').Router();
const store = require('../db/store'); //use this if making seperate store.js file for data

//GET notes
router.get("/notes", (req, res) => { // making the endpoint
  store
    .getNotes()
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
  store
    .postNotes()
    .then((data) => {
      console.log(data);
      return res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});