type Social = {
  email?: string,
  linkedin?: string,
  github?: string,
}

export type AuthorProtocol = {
  name: string
  course: string
  bio: string
  avatarUrl: string
  social: Social
}

export interface AuthorApiServiceProtocol {
  getAuthor: () => Promise<{ author: AuthorProtocol }>
}