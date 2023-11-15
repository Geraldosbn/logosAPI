import { Router } from 'express'
import { Post } from '../../models/post'
import { Req } from '../../shared/interfaces'
import getChildReading from '../../controllers/childReading/getChildReading'
import createPostChildReading from '../../controllers/childReading/createPostChildReading'
import updatePostChildReading from '../../controllers/childReading/updatePostChildReading'
import deletePostChildReading from '../../controllers/childReading/deletePostChildReading'

export const router = Router()

router.get('/', async (req: Req<Post>, res) => {
  const search = req.params.search
  const { body, statusCode } = await getChildReading(search)
  return res.status(statusCode).send(body)
})

router.post('/', async (req: Req<Post>, res) => {
  const postContent = req.body
  const { body, statusCode } = await createPostChildReading(postContent)
  return res.status(statusCode).send(body)
})

router.put('/:id', async (req: Req<Post>, res) => {
  const articleId = req.params.id
  const postContent = req.body
  const { body, statusCode } = await updatePostChildReading(
    articleId,
    postContent
  )
  return res.status(statusCode).send(body)
})

router.delete('/:id', async (req: Req<Post>, res) => {
  const articleId = req.params.id
  const { body, statusCode } = await deletePostChildReading(articleId)
  return res.status(statusCode).send(body)
})
