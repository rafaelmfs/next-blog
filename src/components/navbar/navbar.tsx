import clsx from "clsx";
import type { ComponentProps } from "react";
import { ThemeToggle } from "../theme-toggle";
import { Logo } from "../logo";
import { NavItem } from "./nav-item";

export function Navbar({ className, ...props }: ComponentProps<'nav'>) {

  return (
    <nav {...props} className={clsx([className, "flex-col md:flex-row flex items-center justify-between w-full"])}>
      <Logo />

      <div className="flex gap-8 items-center">
        <NavItem href="/">Início</NavItem>
        <NavItem href="/blog">Blog</NavItem>
        <ThemeToggle />
      </div>
    </nav>
  )
};
