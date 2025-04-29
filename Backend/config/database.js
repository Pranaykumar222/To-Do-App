import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

export const connectDB = async () => {
  try {
    const client = await pool.connect();
    console.log('PostgreSQL connected successfully');
    client.release(); 
  } catch (err) {
    console.error('PostgreSQL connection error:', err);
    process.exit(1);
  }
};

export default pool; 