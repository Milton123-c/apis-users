const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const router = require('./routes');
const errorHandler = require('./utils/errorHandler');
require('dotenv').config();


//This is our app
const app = express();

// Middlewares 
app.use(express.json());
app.use(helmet({
    crossOriginResourcePolicy: false,
}));
app.use(cors());

app.use('/api/v1', router);
app.get('/', (req, res) => {
    return res.send(" <a title='Go to api' href='https://api-user-hew8.onrender.com/api/v1/users'>Welcome to the apis 'CRUD'</a> ");
});
app.get('*', (req, res) => {
    return res.redirect('/'); // redirect to main url
});

// middlewares after routes
app.use(errorHandler)

module.exports = app;
