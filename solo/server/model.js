// file to connect to SQL database

const { Pool } = require('pg');

const PG_URI = 'postgres://hrsxsyfx:Z1njuC38yM8xO-alyX3_LyHmqQ5t51WU@mahmud.db.elephantsql.com/hrsxsyfx';

// create new pool using URI above
const pool = new Pool({connectionString: PG_URI});

