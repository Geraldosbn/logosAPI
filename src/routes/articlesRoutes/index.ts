import { Router, Request } from 'express'
import {
  createArticle,
  deleteArticle,
  listArticles,
  updateArticle
} from '../../database/articleQueries'
import { Req } from './interfaces'
import { getArticles } from '../../controllers/getArticles'

export default async function registerArticleRoutes(
  router: Router
): Promise<void> {
  router.post('/articles', async (req: Request<Req>, reply) => {
    const { author, title, description, content } = req.body

    await createArticle({
      author,
      title,
      description,
      content
    })

    console.log('Estudo criado:', title)
    return reply.status(201).send()
  })

  router.get('/articles', async (request: Req, reply) => {
    const search = request.params.search
    const articles = await getArticles(search)

    console.log('Estudos buscados:', articles)
    return reply.send(articles)
  })

  router.put('/articles/:id', async (request: Req, reply) => {
    const articleId = request.params.id
    const { author, title, description, content } = request.body

    await updateArticle(articleId, { author, title, description, content })

    const articles = await listArticles('')

    return reply.status(204).send(articles)
  })

  router.delete('/articles/:id', async (req: Req, reply) => {
    const articleId = req.params.id

    await deleteArticle(articleId)
    return reply.status(204).send()
  })
}
