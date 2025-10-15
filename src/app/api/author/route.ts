import { NextResponse } from "next/server"

const blogAuthorMock = {
  name: "Fernanda Mascheti",
  course: "Programação",
  bio: "Sou Engenheira de Computação e Pedagoga. Ensino pensamento computacional para estudantes do Ensino Fundamental e Médio. Ensino sobre pensamento computacional usando HTML, CSS e JavaScript. Veja os projetos que já desenvolvi!",
  avatarUrl: "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  social: {
    email: "fernandamascheti@gmail.com",
    linkedin: "/Fernanda Mascheti",
    github: "/fernandamascheti"
  }
}

export const dynamic = 'force-static'

export async function GET() {
  return NextResponse.json({
    author: blogAuthorMock
  })
}