const router = require ('express').Router(); // connect to express
const path = require('path'); // good to use since we are serving static files

//defining the notes page route
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html')) //send notes.html
})

//defining the home page route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))  //send index.html
})

//defining the default route
router.get('*', (req, res) => {
res.sendFile(path.join(__dirname, '../public/index.html'))  //send index.html
})


module.exports = router;