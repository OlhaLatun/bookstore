import express from 'express';
import http from 'http';
import config from './config/env.js'
import logger from './config/logger.js';
import swagger from '../swagger.js';

// Routes
import books from './routes/books.js'

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

router.use('/books', books);

app.use('/api/v1', router)
app.use(express.json())

swagger(app);

const server = http.createServer(app);

server.listen(PORT, () => {
    logger.info(`Environment: ${NODE_ENV}`);
    logger.info(`Server listening on port ${PORT}`);
})