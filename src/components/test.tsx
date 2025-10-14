'use client'

import type { PostsProtocol } from "@/protocols/posts-protocol"
import { PostApiServices } from "@/services/posts-api-service"
import { useEffect, useState } from "react"

const postApiServices = new PostApiServices(false)

 export function Test(){
  const [posts, setPosts] = useState<PostsProtocol[]>([])
  
  useEffect(() => {
    const getPosts = async () => {
      const posts = await postApiServices.getPostsByTag({
        tag: "backend",
        pagination: {
          page: 2,
          limit: 3
        }
      })

      console.log(posts)
    }

    getPosts()
  }, [])

  return (
    <>
      {posts.map(post => <span>{post.title}</span>)}
    </>
  )
}