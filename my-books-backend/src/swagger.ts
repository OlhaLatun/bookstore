import type { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const swaggerDocument = YAML.load('docs/api/bookstore-api.yaml');

export default function (app: Application) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};