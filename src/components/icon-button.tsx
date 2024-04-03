import { ComponentProps } from "react"

interface IconButtonProps extends ComponentProps<"button"> {
  transparent?: boolean
}

export function IconButton({ transparent, ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      className={`rounded-md border border-white/10 p-1.5 ${transparent ? "bg-black/20" : "bg-white/10"}`}
    />
  )
}
