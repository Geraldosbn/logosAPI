import { Router } from 'express'
import registerArticleRoutes from './articlesRoutes'

export const router = Router()
registerArticleRoutes(router)
