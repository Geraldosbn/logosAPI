import {
  listChildReadings,
  updateChildReading
} from '../../../database/childReadingQueries'
import { Post } from '../../../models/post'
import { convertToPosts } from '../../../utils/convertToPosts'
import { HttpResponse } from '../../interfaces'

const updatePostArticle = async (
  id: string,
  post: Post
): Promise<HttpResponse<Post[]>> => {
  try {
    await updateChildReading(id, post)
    const articlesFromDB = await listChildReadings(undefined)
    const articles = convertToPosts(articlesFromDB)
    return { body: articles, statusCode: 204 }
  } catch (error) {
    return {
      body: 'Erro editar o leitura infantil.',
      statusCode: 500
    }
  }
}

export default updatePostArticle
