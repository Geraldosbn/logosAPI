import { app } from './app'

const PORT = Number(process.env.PORT) || 3000

const server = app.listen(PORT, '0.0.0.0', () =>
  console.log(`listening on port ${PORT}`)
)

process.on('SIGINT', () => {
  server.close()
  console.log('APP close')
})
