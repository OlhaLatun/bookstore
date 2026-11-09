const express = require('express');
const http = require('http');
const config = require('./config/env');
const logger = require('./config/logger');

const app = express();
const router = express.Router();

const { PORT, NODE_ENV } = config;

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET');
    next();
})

router.get('/health', (req, res) => {
    res.status(200).json({
        status: 'Ok',
        environment: NODE_ENV
    })
})

app.use('/api/v1', router)
app.use(express.json())

require('../swagger')(app);

const server = http.createServer(app);

server.listen(PORT, () => {
    logger.info(`Environment: ${NODE_ENV}`);
    logger.info(`Server listening on port ${PORT}`);
})