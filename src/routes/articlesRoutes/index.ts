import { Router, Request } from 'express'
import {
  createChildReading,
  deleteChildReading,
  listChildReadings,
  updateChildReading
} from '../../database/childReadingQueries'
import { Req } from './interfaces'

export default async function registerArticleRoutes(
  router: Router
): Promise<void> {
  router.post('/childReadings', async (req: Request<Req>, reply) => {
    const { author, title, description, content } = req.body

    await createChildReading({
      author,
      title,
      description,
      content
    })

    console.log('Estudo criado:', title)
    return reply.status(201).send()
  })

  router.get('/childReadings', async (request: Req, reply) => {
    const search = request.params.search
    const childReadings = await listChildReadings(search)

    console.log('childReadings buscados:', childReadings)
    return reply.send(childReadings)
  })

  router.put('/childReadings/:id', async (request: Req, reply) => {
    const articleId = request.params.id
    const { author, title, description, content } = request.body

    await updateChildReading(articleId, { author, title, description, content })

    const childReadings = await listChildReadings('')

    return reply.status(204).send(childReadings)
  })

  router.delete('/childReadings/:id', async (req: Req, reply) => {
    const articleId = req.params.id

    await deleteChildReading(articleId)
    return reply.status(204).send()
  })
}
