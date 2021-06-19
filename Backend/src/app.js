//definicion del servidor

const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan')

//settigs

app.set('port', process.env.PORT ||4000);

//middlewares
app.use(morgan('dev'))
app.use(cors());
app.use(express.json());

//routes

app.use('/api', require('./routes/index'))


module.exports = app;