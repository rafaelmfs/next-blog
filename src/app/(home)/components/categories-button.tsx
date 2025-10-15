import clsx from "clsx"
import type { ComponentProps } from "react"

type CategoriesButtonProps = ComponentProps<"button">

export function CategoriesButton({ className, ...props }: CategoriesButtonProps) {
  return <button {...props} className={clsx(["rounded-sm bg-sky-400 font-bold py-1 px-1 lg:px-3 lg:py-2 text-xs lg:text-base flex items-center justify-center text-white border border-sky-400 hover:bg-sky-600 dark:hover:bg-sky-300 cursor-pointer transition-all", className])} />
};
