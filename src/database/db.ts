import 'dotenv/config'
import postgres from 'postgres'
import { dataBaseConnection } from './connection/dataBaseConnection'

const sql = postgres('', dataBaseConnection)

export default sql
