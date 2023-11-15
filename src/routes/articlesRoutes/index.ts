import { Router } from 'express'
import { Post } from '../../models/post'
import { Req } from '../../shared/interfaces'
import getArticles from '../../controllers/articles/getArticles'
import createPostArticle from '../../controllers/articles/createPostArticle'
import updatePostArticle from '../../controllers/articles/updatePostArticle'
import deletePostArticle from '../../controllers/articles/deletePostArticle'

export const router = Router()

router.get('/posts', async (req: Req<Post>, res) => {
  const search = req.params.search
  const { body, statusCode } = await getArticles(search)
  return res.status(statusCode).send(body)
})

router.post('/posts', async (req: Req<Post>, res) => {
  const postContent = req.body
  const { body, statusCode } = await createPostArticle(postContent)
  return res.status(statusCode).send(body)
})

router.put('/posts/:id', async (req: Req<Post>, res) => {
  const articleId = req.params.id
  const postContent = req.body
  const { body, statusCode } = await updatePostArticle(articleId, postContent)
  return res.status(statusCode).send(body)
})

router.delete('/posts/:id', async (req: Req<Post>, res) => {
  const articleId = req.params.id
  const { body, statusCode } = await deletePostArticle(articleId)
  return res.status(statusCode).send(body)
})
