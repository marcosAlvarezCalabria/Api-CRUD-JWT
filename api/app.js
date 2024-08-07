require ('dotenv').config();

const express = require ('express');
const logger = require('morgan');

require('./configs/db.configs')

const app = express();

app.use(logger('dev'));


const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`Application runnig in port ${port}`))