import { Row, RowList } from 'postgres'
import { Post } from '../models/post'

export const convertToPosts = (rowList: RowList<Row[]>): Post[] => {
  return rowList.map(row => ({
    author: row.author,
    title: row.title,
    description: row.description,
    content: row.content
  }))
}
