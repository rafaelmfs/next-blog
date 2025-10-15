import { ConditionalRender } from "@/components/conditional-render"
import { Mail, Linkedin, Github } from "lucide-react"
import Link from "next/link"

type ContactProps = {
  email?: string
  linkedin?: string
  github?: string
}

export function Contact({
  email,
  github,
  linkedin
}: ContactProps) {
  return (
    <div className="flex flex-col items-center gap-6 md:flex-row justify-between w-full">
      <div className="flex flex-col gap-2">
        <span className="text-sky-400 font-chackra font-bold">Vamos conversar?</span>
        <strong className="text-slate-700 dark:text-slate-400 font-chackra font-bold text-3xl lg:text-6xl">Entre em contato</strong>
      </div>
      <ul className="space-y-3">
        <ConditionalRender
          condition={Boolean(email)}
          then={
            <li className="flex gap-2 items-center text-slate-400">
              <Mail className="text-sky-400" />
              {email}
            </li>
          }
        />
        <ConditionalRender
          condition={Boolean(linkedin)}
          then={
            <li className="flex underline underline-offset-3 gap-2 items-center text-slate-400">
              <Link href={"https://www.linkedin.com/in/rafaelmfs/"} target="_blank" rel="noreferrer noopener" className="flex underline underline-offset-3 gap-2 items-center text-slate-400">
                <Linkedin className="text-sky-400" />
                {linkedin}
              </Link>
            </li>
          }
        />
        <ConditionalRender
          condition={Boolean(github)}
          then={
            <li className="flex underline underline-offset-3 gap-2 items-center text-slate-400">
              <Link href={"https://github.com/rafaelmfs"} target="_blank" rel="noreferrer noopener" className="flex underline underline-offset-3 gap-2 items-center text-slate-400">
                <Github className="text-sky-400" />
                {github}
              </Link>
            </li>
          }
        />
      </ul>
    </div>
  )
};
