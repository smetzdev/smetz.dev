import React, { HTMLAttributes } from "react"

export const ExternalLink = ({
  href,
  children,
  className,
  ...props
}: ExternalLinkProps) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={className}
      {...props}
    >
      {children}
    </a>
  )
}

export type ExternalLinkProps = HTMLAttributes<HTMLAnchorElement> & {
  href: string
  className?: string
  children: React.ReactNode
}
