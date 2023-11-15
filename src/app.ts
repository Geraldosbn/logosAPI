import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { router as articleRoutes } from './routes/articlesRoutes'
import { router as childReadingRoutes } from './routes/childReadingRoutes'

export const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use('/articles', articleRoutes)
app.use('/childReadings', childReadingRoutes)
