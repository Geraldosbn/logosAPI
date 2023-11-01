import { database, server } from '../server'

export const getRoutesArticle = async () => {
  server.post('/articles', async (request, reply) => {
    const { author, title, description, content } = request.body
    await database.createArticle({
      author,
      title,
      description,
      content
    })
    return reply.status(201).send()
  })

  // Rota GET para listar artigos da tabela postArticle
  server.get('/articles', async (request, reply) => {
    const search = request.query.search
    const articles = await database.listArticles(search)
    return reply.send(articles)
  })

  // Rota PUT para atualizar um artigo na tabela postArticle
  server.put('/articles/:id', async (request, reply) => {
    const articleId = request.params.id
    const { title, description, content } = request.body
    await database.updateArticle(articleId, {
      title,
      description,
      content
    })
    const articles = await database.listArticles()
    return reply.status(204).send(articles)
  })

  // Rota DELETE para excluir um artigo na tabela postArticle
  server.delete('/articles/:id', async (request, reply) => {
    const articleId = request.params.id
    await database.deleteArticle(articleId)
    return reply.status(204).send()
  })
}
