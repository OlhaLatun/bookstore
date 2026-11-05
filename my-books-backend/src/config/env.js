const path = require('path');
const dotenv = require('dotenv');
const { z } = require('zod');

dotenv.config({
    path: path.resolve(__dirname, '../../.env')
});

const envSchema = z.object({
    NODE_ENV: z.enum(['development']).default('development'),
    PORT: z.coerce.number().default(3000),
    FRONTEND_URL: z.string().default('http://localhost:5173')
})

// Validation
const result = envSchema.safeParse(process.env);

if (!result.success) {
    console.error('Invalid environment configuration:');

    console.error(
        z.treeifyError(result.error)
    );

    process.exit(1);
}

// Export validated configuration
module.exports = Object.freeze(result.data);