import { deleteChildReading } from '../../../database/childReadingQueries'
import { HttpResponse } from '../../interfaces'

const deletePostChildReading = async (
  id: string
): Promise<HttpResponse<string>> => {
  try {
    await deleteChildReading(id)
    return { body: 'Success', statusCode: 204 }
  } catch (error) {
    return {
      body: 'Erro ao deletar leitura infantil.',
      statusCode: 500
    }
  }
}
export default deletePostChildReading
