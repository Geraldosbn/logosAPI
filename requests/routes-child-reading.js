export function setupChildReadingRoutes(server, database) {
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
}
