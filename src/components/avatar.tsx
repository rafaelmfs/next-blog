import * as RadixAvatar from "@radix-ui/react-avatar";

type AvatarProps = {
  name: string
  src: string
}

export function Avatar({
  name,
  src
}: AvatarProps) {
  const fallBackContent = name.split(" ").map(item => item[0].toLocaleUpperCase()).join("")
  return (
    <RadixAvatar.Root className="border-2 border-sky-400 w-32 h-32 md:w-56 md:h-56 inline-flex rounded-full overflow-hidden select-none items-center justify-center align-middle">
      <RadixAvatar.Image
        className="size-full rounded-[inherit] object-cover saturate-0"
        src={src}
        alt=""
      />
      <RadixAvatar.Fallback className="leading-1 text-2xl flex size-full items-center justify-center bg-white font-medium text-zinc-900 dark:text-zinc-400" delayMs={600}>
        {fallBackContent}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
};
