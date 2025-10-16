'use client'

import { type ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type PaginationProps = {
  total: number
  page: number
  onPageChange: (page: number) => void
}

function PageButton({ className, ...props }: ComponentProps<'button'>) {
  return <button className={twMerge("cursor-pointer hover:shadow-sm hover:shadow-slate-700/30 text-xs md:text-base md:leading-6 font-bold flex items-center justify-center md:px-3 md:py-2 p-2 data-[active='true']:bg-slate-700 dark:data-[active='true']:bg-sky-400 bg-gray-400 dark:bg-slate-400 text-white rounded-sm", className)} {...props} />
}

export function Pagination({
  onPageChange,
  page,
  total
}: PaginationProps) {

  function generatePages() {
    const pages: (number | "...")[] = []

    const isSmallList = total <= 5
    const isNearStart = page <= 3
    const isNearEnd = page >= total - 2

    if (isSmallList) {
      for (let i = 1; i <= total; i++) {
        pages.push(i)
      }
      return pages
    }

    pages.push(1)

    if (!isNearStart) {
      pages.push("...")
    }

    const startPage = Math.max(2, page - 1)
    const endPage = Math.min(total - 1, page + 1)

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    if (!isNearEnd) {
      pages.push("...")
    }

    pages.push(total)
    return pages
  }

  const pages = generatePages()

  return (
    <div className="flex gap-4 items-end w-full justify-center">
      {pages.map((currentPage, index) => {
        const key = `${currentPage}-${index}`
        const isSelected = page === currentPage

        if (typeof currentPage !== 'number') {
          return <span className="text-zinc-900 dark:text-zinc-200" key={key}>{currentPage}</span>
        }

        return <PageButton key={key} onClick={() => onPageChange(currentPage)} data-active={String(isSelected)}>{currentPage}</PageButton>
      })}
    </div>
  )
};
