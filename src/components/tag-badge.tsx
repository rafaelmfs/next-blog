import { twMerge } from "tailwind-merge"

type TagBadgeProps = {
  text: string
  title?: string
  className?: string
}

export function TagBadge({
  text,
  className,
  title
}: TagBadgeProps) {
  return (
    <div title={title} className={twMerge("border border-sky-400 text-sky-400 bg-white px-3 py-2 text-sm flex items-center justify-center font-chackra", className)}>
      {text}
    </div>
  )
};
