import { Pool } from "pg"

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "partido_democrata",
    password: "35218889",
    port: 5432,
})

// const pool = new Pool({
//     connectionString: process.env.RAILWAY_PG_CONNECTION_STRING,
//     ssl: {
//         rejectUnauthorized: false
//     }
// })

export default pool