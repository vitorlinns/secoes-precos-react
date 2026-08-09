import type { RemixiconComponentType } from '@remixicon/react'

interface IconBadgeProps {
  icon: RemixiconComponentType
}

export function IconBadge({ icon: Icon }: IconBadgeProps) {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent-200 bg-accent-50 text-accent-600">
      <Icon size={22} />
    </div>
  )
}
