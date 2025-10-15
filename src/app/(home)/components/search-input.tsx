'use client'

import { Search } from "lucide-react";

type SearchInputProps = {
  value?: string
  onChange?: (value: string) => void
}

export function SearchInput({
  onChange,
  value
}: SearchInputProps) {
  return (
    <label className="focus-within:shadow-md focus-within:shadow-sky-400/30  border border-sky-400  rounded-sm px-3.5 py-2 flex gap-2">
      <input placeholder="Buscar..." className="flex-1 outline-none placeholder:text-slate-700 text-zinc-900" value={value} onChange={(event) => onChange?.(event.target.value)} />
      <Search className="text-sky-400" />
    </label>
  )
};
