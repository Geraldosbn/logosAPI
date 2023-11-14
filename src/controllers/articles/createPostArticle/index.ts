import { createArticle } from '../../../database/articleQueries'
import { Post } from '../../../models/post'
import { HttpResponse } from '../../interfaces'

const createPostArticle = async (post: Post): Promise<HttpResponse<string>> => {
  try {
    await createArticle(post)
    return { body: 'Success', statusCode: 201 }
  } catch (error) {
    return {
      body: 'Erro ao criar o artigo.',
      statusCode: 500
    }
  }
}
export default createPostArticle
