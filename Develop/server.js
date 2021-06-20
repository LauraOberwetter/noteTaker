const express = require('express')
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express(); //app initialized w/express
const PORT = 3000; //set up port

app.use(express.urlencoded({extended:true})); // middleware
app.use(express.json()) //recognize incoming info as JSON object
app.use(express.static('public')); // communication with express. serve static assets from public folder. How we get css/js/etc
app.use('/api', apiRoutes); // API routes
app.use('/', htmlRoutes); // HTML routes

// Listener, starts server
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))