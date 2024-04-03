import { ComponentProps } from "react"

interface NavLinkProps extends ComponentProps<"a"> {}

export function NavLink(props: NavLinkProps) {
  return (
    <a
      {...props}
      className="text-sm font-medium text-zinc-200"
    />
  )
}
