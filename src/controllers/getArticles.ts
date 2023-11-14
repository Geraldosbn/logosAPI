import { listArticles } from '../database/articleQueries'
import { convertToPosts } from '../utils/convertToPosts'

export const getArticles = async (search?: string) => {
  const articlesFromDB = await listArticles(search)
  const articles = convertToPosts(articlesFromDB)

  console.table(articles)

  return articles
}
