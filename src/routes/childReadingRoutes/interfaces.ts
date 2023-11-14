export interface Req {
  body: Body
  params: Params
}

interface Params {
  search?: string
  id: string
}

interface Body {
  author: string
  title: string
  description: string
  content: string
}
