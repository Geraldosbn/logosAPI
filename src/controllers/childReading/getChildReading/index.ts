import { listChildReadings } from '../../../database/childReadingQueries'
import { Post } from '../../../models/post'
import { convertToPosts } from '../../../utils/convertToPosts'
import { HttpResponse } from '../../interfaces'

const getChildReading = async (
  search?: string
): Promise<HttpResponse<Post[]>> => {
  try {
    const postsFromDB = await listChildReadings(search)
    const posts = convertToPosts(postsFromDB)
    return { body: posts, statusCode: 200 }
  } catch (error) {
    return {
      body: 'Erro ao buscar os leitura infantil.',
      statusCode: 500
    }
  }
}
export default getChildReading
