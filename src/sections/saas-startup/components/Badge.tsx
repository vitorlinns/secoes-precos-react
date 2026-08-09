import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  className?: string
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`w-fit rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 ${className}`}
    >
      {children}
    </span>
  )
}
