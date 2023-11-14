import { randomUUID } from 'crypto'
import sql from './db'
import { Post } from '../models/post'

export async function listArticles(search: string | undefined) {
  let postarticle
  if (search) {
    postarticle = await sql`SELECT * FROM postArticle
      WHERE (title ILIKE '%' || ${search} || '%') OR (COALESCE(${search}, '') = '')`
  } else {
    postarticle = await sql`SELECT * FROM postarticle`
  }
  return postarticle
}

export async function createArticle(article: Post) {
  const articleId = randomUUID()
  const { author, title, description, content } = article

  await sql`INSERT INTO postArticle (id, author, title, description, content)
            VALUES (${articleId}, ${author}, ${title}, ${description}, ${content})`
}

export async function updateArticle(id: string, article: Post) {
  const { title, description, content } = article

  await sql`UPDATE postArticle
            SET title = ${title}, description = ${description}, content = ${content}
            WHERE id = ${id}`
}

export async function deleteArticle(id: string) {
  await sql`DELETE FROM postArticle WHERE id = ${id}`
}
