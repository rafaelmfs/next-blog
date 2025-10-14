export async function apiGet<ResponseData>(endpoint: string): Promise<ResponseData>{
try {
    const response = await fetch(endpoint, {
    headers: {
      "Content-Type": "application/json",
    }
  })
  const data = await response.json() as ResponseData
  
  return data
} catch (error) {
  throw error
}
}