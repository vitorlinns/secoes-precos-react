import type { RemixiconComponentType } from '@remixicon/react'

interface IconBadgeProps {
  icon: RemixiconComponentType
}

export function IconBadge({ icon: Icon }: IconBadgeProps) {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-green-200 bg-green-50 text-green-600">
      <Icon size={22} />
    </div>
  )
}
