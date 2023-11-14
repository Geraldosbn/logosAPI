import { listArticles, updateArticle } from '../../../database/articleQueries'
import { Post } from '../../../models/post'
import { convertToPosts } from '../../../utils/convertToPosts'
import { HttpResponse } from '../../interfaces'

const updatePostArticle = async (
  id: string,
  post: Post
): Promise<HttpResponse<Post[]>> => {
  try {
    await updateArticle(id, post)
    const articlesFromDB = await listArticles(undefined)
    const articles = convertToPosts(articlesFromDB)
    return { body: articles, statusCode: 204 }
  } catch (error) {
    return {
      body: 'Erro editar o artigo.',
      statusCode: 500
    }
  }
}

export default updatePostArticle
