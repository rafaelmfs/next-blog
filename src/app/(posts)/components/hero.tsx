import { Avatar } from "@/components/avatar"

type HeroProps = {
  name: string
  course: string
  avatarUrl: string
  bio: string
}

export function Hero({
  avatarUrl,
  bio,
  course,
  name
}: HeroProps) {
  const firstName = name.split(" ")[0]
  return (
    <div className="gradient-background flex flex-col gap-6 items-center justify-center w-full">
      <Avatar
        name={name}
        src={avatarUrl}
      />
      <span className="text-sky-400 font-bold font-chackra whitespace-nowrap text-sm md:text-base">Olá, meu nome é <span className="capitalize">{firstName}</span>_</span>
      <strong className="text-slate-700 dark:text-slate-200 font-bold font-chackra text-2xl sm:text-3xl md:text-6xl">Eu ensino <span className="bg-linear-65 from-[#8C61D5] to-sky-400 bg-clip-text text-transparent capitalize">{course}</span></strong>
      <p className="text-center w-full max-w-[580px] text-sm md:text-base font-inter text-slate-400 dark:text-zinc-300">{bio}</p>
    </div>
  )
};
