import fastify from 'fastify'
import { DatabasePostgres } from './database-postgres.js'

export const server = fastify()
export const database = new DatabasePostgres()

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

// Rota POST para criar uma postagem na tabela postChildReading
server.post('/childReadings', async (request, reply) => {
  const { author, title, description, content } = request.body
  await database.createChildReading({
    author,
    title,
    description,
    content
  })
  return reply.status(201).send()
})

// Rota GET para listar postagens da tabela postChildReading
server.get('/childReadings', async (request, reply) => {
  const search = request.query.search
  const childReadings = await database.listChildReadings(search)
  return reply.send(childReadings)
})

// Rota PUT para atualizar uma postagem na tabela postChildReading
server.put('/childReadings/:id', async (request, reply) => {
  const childReadingId = request.params.id
  const { title, description, content } = request.body
  await database.updateChildReading(childReadingId, {
    title,
    description,
    content
  })
  const childReadings = await database.listChildReadings()
  return reply.status(204).send(childReadings)
})

// Rota DELETE para excluir uma postagem na tabela postChildReading
server.delete('/childReadings/:id', async (request, reply) => {
  const childReadingId = request.params.id
  await database.deleteChildReading(childReadingId)
  return reply.status(204).send()
})

server.listen({ host: '0.0.0.0', port: process.env.PORT ?? 3000 })
