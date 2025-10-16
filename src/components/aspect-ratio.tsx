import {
  AspectRatioProps as RadixAspectRatioProps,
  Root as RadixAspectRatioRoot
} from "@radix-ui/react-aspect-ratio"

type AspectRatioProps = RadixAspectRatioProps

export function AspectRatio(props: AspectRatioProps) {
  return (
    <RadixAspectRatioRoot {...props} />
  )
};
