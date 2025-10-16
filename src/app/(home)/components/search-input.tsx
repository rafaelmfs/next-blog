'use client'

import { ConditionalRender } from '@/components/conditional-render'
import { Categories } from '@/constants/categories'
import { tags } from '@/constants/tags'
import type { CategoriesProtocol } from '@/protocols/categories-protocol'
import type { TagProtocol } from '@/protocols/tags-protocol'
import { normalizeString } from '@/utils/normalize-string'
import * as Popover from '@radix-ui/react-popover'
import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'

type SearchInputProps = {
  onSelect?: (value: string) => void
  value: string
}

export function SearchInput({
  onSelect,
  value
}: SearchInputProps) {
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState(value)
  const [filtered, setFiltered] = useState(tags)

  const debounceDelay = 300

  const handleSelect = (category: TagProtocol) => {
    setInputValue(category.name)
    setOpen(false)
    onSelect?.(category.slug)
  }

  useEffect(() => {
    const handler = setTimeout(() => {
      if (!inputValue.trim()) {
        setFiltered(tags)
        return
      }

      const result = tags.filter((category) => {
        const search = normalizeString(inputValue)
        return normalizeString(category.name).includes(search)
      })
      setFiltered(result)
    }, debounceDelay)

    return () => clearTimeout(handler)
  }, [inputValue, debounceDelay])

  useEffect(() => {
    if (!value) {
      setInputValue("")
    }
  }, [value])

  const renderList = () => filtered.map((item) => (
    <li
      key={item.slug}
      className="px-3 py-2 cursor-pointer hover:bg-sky-50 dark:hover:bg-sky-950 dark:text-zinc-50"
      onClick={() => handleSelect(item)}
    >
      {item.name}
    </li>
  ))

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <label className="w-full flex items-center border border-sky-400 rounded-sm px-3.5 py-2 gap-2 focus-within:shadow-md focus-within:shadow-sky-400/30">
          <input
            placeholder={"Buscar..."}
            className="flex-1 outline-none dark:placeholder:text-slate-400 placeholder:text-slate-700 text-zinc-900 dark:text-zinc-100 bg-transparent"
            value={inputValue}
            onChange={(event) => {
              const value = event.target.value
              setInputValue(value)
            }}
          />
          <Search className="text-sky-400" />
        </label>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          onOpenAutoFocus={(event) => event.preventDefault()}
          side="bottom"
          align="start"
          className="w-[var(--radix-popover-trigger-width)] mt-1 rounded-md border border-sky-400/40 bg-white shadow-md z-50"
        >
          <ul className="max-h-56 overflow-y-auto">
            <ConditionalRender
              condition={filtered.length > 0}
              then={renderList()}
              otherwise={<li className="p-6 text-slate-700 dark:text-slate-400 font-medium text-sm ">Nenhum resultado encontrado.</li>}
            />
          </ul>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
