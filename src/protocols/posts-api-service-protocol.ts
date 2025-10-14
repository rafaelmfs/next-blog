import type { CategoriesTypes } from "./categories-protocol";
import type { PaginationProtocol } from "./pagination-protocol";
import type { Meta, PaginationResponse } from "./pagination-response-protocol";
import type { PostsProtocol } from "./posts-protocol";
import type { TagsTypes } from "./tags-protocol";

export interface GetPostsByCategoryResponse{
  category: CategoriesTypes
  pagination?: PaginationProtocol
}

export interface GetPostsByTagResponse {
  tag: TagsTypes
  pagination?: PaginationProtocol
}

export type GetPostsListResponse = PaginationResponse & { posts: PostsProtocol[] }
export type GetPostResponse = { post: PostsProtocol, meta: Pick<Meta, "generatedAt" | "seed">}

export interface PostApiServicesProtocol {
  getPosts: (params?: PaginationProtocol) => Promise<GetPostsListResponse>
  getPostsByCategory: (params: GetPostsByCategoryResponse) => Promise<GetPostsListResponse>
  getPostsByTag: (params: GetPostsByTagResponse) => Promise<GetPostsListResponse>
  getPostById: (id: string) => Promise<GetPostResponse>
}