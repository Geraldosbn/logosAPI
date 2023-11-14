export interface Req<T> {
  body: T
  params: { search?: string; id: string }
}
