import { Router } from 'express'
import registerArticleRoutes from './articlesRoutes'
import registerChildReadingsRoutes from './childReadingRoutes'

export const router = Router()
registerArticleRoutes(router)
registerChildReadingsRoutes(router)
