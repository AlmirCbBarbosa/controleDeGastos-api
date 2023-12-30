import 'dotenv/config';
import postgres from 'postgres';

let {PGHOST, PGPORT, PGDATABASE, PGUSER, PGPASSWORD} = process.env

const sql = postgres({
    host: PGHOST,
    port: PGPORT,
    database: PGDATABASE,
    username: PGUSER,
    password: PGPASSWORD,
    ssl: false
});

console.log(PGHOST);

export default sql;



