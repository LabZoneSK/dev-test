export interface IItems {
  title: string
  link: string
  data_taken: string
  author: string
  author_id: string
  date_taken: string
  description: string
  published: string
  tags: string
  media: {
    m: string
  }
}

export interface IResponse{
    items:IItems[]
}
