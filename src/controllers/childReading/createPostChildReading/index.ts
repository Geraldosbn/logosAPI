import { createChildReading } from '../../../database/childReadingQueries'
import { Post } from '../../../models/post'
import { HttpResponse } from '../../interfaces'

const createPostChildReading = async (
  post: Post
): Promise<HttpResponse<string>> => {
  try {
    await createChildReading(post)
    return { body: 'Success', statusCode: 201 }
  } catch (error) {
    return {
      body: 'Erro ao criar o leitura infantil.',
      statusCode: 500
    }
  }
}
export default createPostChildReading
