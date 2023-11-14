import { listArticles } from '../../../database/articleQueries'
import { Post } from '../../../models/post'
import { convertToPosts } from '../../../utils/convertToPosts'
import { HttpResponse } from '../../interfaces'

const getArticles = async (search?: string): Promise<HttpResponse<Post[]>> => {
  try {
    const postsFromDB = await listArticles(search)
    const posts = convertToPosts(postsFromDB)
    return { body: posts, statusCode: 200 }
  } catch (error) {
    return {
      body: 'Erro ao buscar os artigos.',
      statusCode: 500
    }
  }
}
export default getArticles
