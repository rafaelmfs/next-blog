import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { Logo } from "../logo";
import { ThemeToggle } from "../theme-toggle";
import { NavItem } from "./nav-item";

type NavbarProps = ComponentProps<'nav'> & {
  authorName: string
}

export function Navbar({ className, authorName, ...props }: NavbarProps) {

  return (
    <nav {...props} className={twMerge("flex-col md:gap-12 md:flex-row flex items-center justify-between w-full", className)}>
      <Logo authorName={authorName} />

      <div className="flex gap-8 items-center">
        <NavItem href="/">Início</NavItem>
        <NavItem href="/blog">Blog</NavItem>
        <ThemeToggle />
      </div>
    </nav>
  )
};
