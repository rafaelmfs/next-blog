import type { ReactNode } from "react"

type ConditionalRenderProps = {
  condition: boolean
  then: ReactNode
  otherwise?: ReactNode
}

export function ConditionalRender({ condition, then, otherwise }: ConditionalRenderProps) {
  return condition ? then : otherwise
};
