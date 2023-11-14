import { Post } from '../../models/post'

export interface Req {
  body: Post
  params: Params
}

interface Params {
  search?: string
  id: string
}
