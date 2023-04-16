import { Client } from 'pg';

const { PG_HOST, PG_PORT, PG_DATABASE, PG_USERNAME, PG_PASSWORD } = process.env;

export const dbOptions = {
  host: PG_HOST,
  port: PG_PORT,
  database: PG_DATABASE,
  user: PG_USERNAME,
  password: PG_PASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
  connectionTimeoutMillis: 5000,
};

export const createConnectionToDB = async () => {
  const {
    PG_HOST,
    PG_PORT,
    PG_DATABASE,
    PG_USERNAME,
    PG_PASSWORD,
  } = process.env;

  const dbOptions = {
    host: PG_HOST,
    port: PG_PORT,
    database: PG_DATABASE,
    user: PG_USERNAME,
    password: PG_PASSWORD,
    ssl: {
      rejectUnauthorized: false,
    },
    connectionTimeoutMillis: 15000,
  };

  const dbClient = new Client(dbOptions);

  dbClient
    .connect()
    .then(() => console.log('Connected'))
    .catch(err => console.log('Connection Error', err.stack));

  return dbClient;
};
