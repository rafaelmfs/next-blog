export type Meta =  {
  generatedAt: string;
  seed: string;
  category?: string;
  tag?: string
};

type Pagination = {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  postsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export type PaginationResponse = {
  pagination: Pagination;
  meta: Meta
};