import path from 'path'
import dotenv from 'dotenv'
import { z } from 'zod'

const __dirname = import.meta.dirname;

dotenv.config({
    path: path.resolve(__dirname, '../../.env.js')
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
export default Object.freeze(result.data);