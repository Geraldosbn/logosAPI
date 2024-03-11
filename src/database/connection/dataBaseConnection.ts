import { DataBaseConfig } from './inteface'

const {
  HOST,
  DATABASE,
  USER,
  PASSWORD,
  NEON_PGHOST,
  NEON_PGDATABASE,
  NEON_PGUSER,
  NEON_PGPASSWORD,
  NEON_ENDPOINT_ID
} = process.env

const dataBaseConfig: DataBaseConfig = {
  devParams: {
    host: HOST,
    database: DATABASE,
    user: USER,
    password: PASSWORD,
    port: 5432
  },
  prodParams: {
    host: NEON_PGHOST,
    database: NEON_PGDATABASE,
    user: NEON_PGUSER,
    password: NEON_PGPASSWORD,
    port: 5432,
    ssl: 'require',
    connection: {
      options: `project=${NEON_ENDPOINT_ID}`
    }
  }
}

export const dataBaseConnection = dataBaseConfig.devParams
