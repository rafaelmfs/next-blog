import { DEFAULT_LIMIT, DEFAULT_PAGE, MAX_VALUE_FOR_LIMIT } from "@/constants/pagination-constants";
import { PostApiServices } from "@/services/posts-api-service";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const page = Number(req.nextUrl.searchParams.get('page') ?? DEFAULT_PAGE)
  const limit = Number(req.nextUrl.searchParams.get('limit') ?? DEFAULT_LIMIT)

  if(limit > MAX_VALUE_FOR_LIMIT){
    throw new Error("Invalid limit.")
  }

  const postsApi = new PostApiServices(true)
  const response = await postsApi.getPosts({ limit, page })
  
  return NextResponse.json(response);
}