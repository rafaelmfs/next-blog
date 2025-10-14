'use client'

import clsx from "clsx"
import type { LinkProps } from "next/link"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

type NavItemProps = LinkProps & {
  children: ReactNode
}

export function NavItem({ children, ...props }: NavItemProps) {
  const pathname = usePathname()

  const isActive = pathname === props.href.toString()
  return (
    <Link {...props} className={clsx(["font-chackra font-bold text-sm sm:text-base md:text-2xl", isActive ? "text-sky-400" : "text-slate-700 dark:text-slate-600"])}>
      {children}
    </Link>
  )
};
