import { DEFAULT_LIMIT, DEFAULT_PAGE, MAX_VALUE_FOR_LIMIT } from "@/constants/pagination-constants";
import type { CategoriesTypes } from "@/protocols/categories-protocol";
import { PostApiServices } from "@/services/posts-api-service";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(_req: NextRequest, ctx: RouteContext<'/api/posts/id/[id]'>) {
  const params = await ctx.params
  const postId = params.id

  const postsApi = new PostApiServices(true)
  const response = await postsApi.getPostById(postId)
  
  return NextResponse.json(response);
}