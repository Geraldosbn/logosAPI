import 'dotenv/config'
import postgres from 'postgres'

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env

const sql = postgres({
  host: PGHOST,
  port: 5432,
  dbname: PGDATABASE,
  user: PGUSER,
  password: PGPASSWORD,
  sslmode: 'prefer',
  connect_timeout: 10
})

export default sql
