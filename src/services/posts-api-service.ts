import type { PaginationProtocol } from "@/protocols/pagination-protocol";
import type { GetPostResponse, GetPostsByCategoryResponse, GetPostsByTagResponse, GetPostsListResponse, PostApiServicesProtocol } from "@/protocols/posts-api-service-protocol";
import { apiGet } from "./api";
import { UrlBuilder } from "./build-url";
import {
  getApiEndpoints
} from "./endpoints/posts-endpoints";


export class PostApiServices implements PostApiServicesProtocol {
  constructor(private isExternal: boolean) { }

  async getPosts(params?: PaginationProtocol) {
    const apiEndpoint = getApiEndpoints({ isExternal: this.isExternal })

    const endpoint = new UrlBuilder(apiEndpoint.allPosts)
      .withPagination({ page: params?.page, limit: params?.limit })
      .getUrl()

    try {
      const data = await apiGet<GetPostsListResponse>(endpoint)
      return data
    } catch (error) {
      throw error
    }
  }

  async getPostsByCategory({ category, pagination }: GetPostsByCategoryResponse) {
    const apiEndpoint = getApiEndpoints({ isExternal: this.isExternal })

    const endpoint = new UrlBuilder(apiEndpoint.postsByCategory(category))
      .withPagination({ limit: pagination?.limit, page: pagination?.page })
      .getUrl()

    try {
      const data = await apiGet<GetPostsListResponse>(endpoint)
      return data
    } catch (error) {
      throw error
    }
  }

  async getPostsByTag({ tag, pagination }: GetPostsByTagResponse) {
    const apiEndpoint = getApiEndpoints({ isExternal: this.isExternal })

    const endpoint = new UrlBuilder(apiEndpoint.postsByTag(tag))
      .withPagination({ limit: pagination?.limit, page: pagination?.page })
      .getUrl()

    try {
      const data = await apiGet<GetPostsListResponse>(endpoint)
      return data
    } catch (error) {
      throw error
    }
  }

  async getPostById(id: string) {
    const apiEndpoint = getApiEndpoints({ isExternal: this.isExternal })
    const endpoint = apiEndpoint.postById(id)

    try {
      const data = await apiGet<GetPostResponse>(endpoint)
      return data
    } catch (error) {
      throw error
    }
  }
}