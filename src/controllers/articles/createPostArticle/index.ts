import { createArticle } from '../../../database/articleQueries'
import { Post } from '../../../models/post'
import { convertToPosts } from '../../../utils/convertToPosts'
import { HttpResponse } from '../../interfaces'

const createPostArticle = async (post: Post): Promise<HttpResponse<Post[]>> => {
  try {
    const requiredFields = ['author', 'title', 'description', 'content']
    for (const field of requiredFields) {
      if (!post[field as keyof Post]) {
        console.log(`field: ${field}`)
        return {
          statusCode: 400,
          body: `Field ${field} is required`
        }
      }
    }

    const articleCreated = await createArticle(post)
    const convertedPost = convertToPosts(articleCreated)

    if (articleCreated.length > 0) {
      return { body: convertedPost, statusCode: 201 }
    }

    return {
      body: 'Erro ao criar o artigo.',
      statusCode: 500
    }
  } catch (error) {
    return {
      body: 'Erro ao criar o artigo.',
      statusCode: 500
    }
  }
}
export default createPostArticle
