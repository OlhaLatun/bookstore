import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const swaggerDocument = YAML.load('docs/api/bookstore-api.yaml');

export default function (app) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};