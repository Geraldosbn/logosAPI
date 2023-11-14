import { deleteArticle } from '../../../database/articleQueries'
import { HttpResponse } from '../../interfaces'

const deletePostArticle = async (id: string): Promise<HttpResponse<string>> => {
  try {
    await deleteArticle(id)
    return { body: 'Success', statusCode: 204 }
  } catch (error) {
    return {
      body: 'Erro ao deletar artigo.',
      statusCode: 500
    }
  }
}
export default deletePostArticle
