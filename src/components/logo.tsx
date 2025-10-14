import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="gap-5 items-center cursor-pointer flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.6em"
        height="2.6em"
        fill="none"
        viewBox="0 0 46 46"
      >
        <path
          stroke="#1CA7C8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="m30.667 34.5 11.5-11.5-11.5-11.5M15.333 11.5 3.833 23l11.5 11.5"
        ></path>
      </svg>
      <span className="text-sm whitespace-nowrap sm:text-lg uppercase font-chackra font-bold text-slate-700 dark:text-slate-200 md:text-2xl">FERNANDA MASCHETI</span>
    </Link>
  )
};
