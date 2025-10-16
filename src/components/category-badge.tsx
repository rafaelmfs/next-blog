import clsx from "clsx"

type CategoryBadgeProps = {
  text: string
  title?: string
  className?: string
}

export function CategoryBadge({
  text,
  className,
  title
}: CategoryBadgeProps) {
  return (
    <div title={title} className={clsx([className, "bg-sky-400 text-white max-w-36 px-9 py-2 text-sm flex items-center justify-center font-chackra capitalize"])}>
      {text}
    </div>
  )
};
