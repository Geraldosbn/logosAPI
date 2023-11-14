import { randomUUID } from 'crypto'
import sql from './db'
import { Post } from '../models/post'

export async function listChildReadings(search: string | undefined) {
  let postChildReading
  if (search) {
    postChildReading = await sql`SELECT * FROM postChildReading
      WHERE (title ILIKE '%' || ${search} || '%') OR (COALESCE(${search}, '') = '')`
  } else {
    postChildReading = await sql`SELECT * FROM postChildReading`
  }
  return postChildReading
}

export async function createChildReading(post: Post) {
  const childReadingId = randomUUID()
  const { author, title, description, content } = post

  await sql`INSERT INTO postChildReading (id, author, title, description, content)
            VALUES (${childReadingId}, ${author}, ${title}, ${description}, ${content})`
}

export async function updateChildReading(id: string, post: Post) {
  const { title, description, content } = post

  await sql`UPDATE postChildReading
            SET title = ${title}, description = ${description}, content = ${content}
            WHERE id = ${id}`
}

export async function deleteChildReading(id: string) {
  await sql`DELETE FROM postChildReading WHERE id = ${id}`
}
