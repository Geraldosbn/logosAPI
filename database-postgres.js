import { randomUUID } from 'crypto'
import sql from './db.js'

export class DatabasePostgres {
  async listArticles(search) {
    let postarticle
    if (search) {
      postarticle = await sql`SELECT * FROM postArticle
      WHERE (title ILIKE '%' || search || '%') OR (COALESCE(search, '') = '')`
    } else {
      postarticle = await sql`select * from postarticle`
    }
    return postarticle
  }

  async createArticle(article) {
    const articleId = randomUUID()
    const { author, title, description, content } = article

    await sql`INSERT INTO postArticle (id, author, title, description, content)
              VALUES (${articleId}, ${author}, ${title}, ${description}, ${content})`
  }

  async updateArticle(id, article) {
    const { title, description, content } = article

    await sql`UPDATE postArticle
              SET title = ${title}, description = ${description}, content = ${content}
              WHERE id = ${id}`
  }

  async deleteArticle(id) {
    await sql`DELETE FROM postArticle WHERE id = ${id}`
  }

  //FUNCTIONS FOR CHILDREADING TABLE

  async listChildReadings(search) {
    let postChildReading
    if (search) {
      postChildReading = await sql`SELECT * FROM postChildReading
      WHERE (title ILIKE '%' || search || '%') OR (COALESCE(search, '') = '')`
    } else {
      postChildReading = await sql`SELECT * FROM postChildReading`
    }
    return postChildReading
  }

  async createChildReading(childReading) {
    const childReadingId = randomUUID()
    const { author, title, description, content } = childReading

    await sql`INSERT INTO postChildReading (id, author, title, description, content)
              VALUES (${childReadingId}, ${author}, ${title}, ${description}, ${content})`
  }

  async updateChildReading(id, childReading) {
    const { title, description, content } = childReading

    await sql`UPDATE postChildReading
              SET title = ${title}, description = ${description}, content = ${content}
              WHERE id = ${id}`
  }

  async deleteChildReading(id) {
    await sql`DELETE FROM postChildReading WHERE id = ${id}`
  }
}
