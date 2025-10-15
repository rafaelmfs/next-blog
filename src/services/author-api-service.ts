import type { AuthorApiServiceProtocol, AuthorProtocol } from "@/protocols/author-api-service-protocol";
import { apiGet } from "./api";
import { authorEndpoints } from "./endpoints/author-endpoints";

export class AuthorApiService implements AuthorApiServiceProtocol {
  async getAuthor() {
    const authorResponse = await apiGet<{ author: AuthorProtocol }>(authorEndpoints.getAuthor)
    return authorResponse
  }
}