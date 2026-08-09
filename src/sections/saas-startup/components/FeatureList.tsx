import { RiCheckLine } from '@remixicon/react'

interface FeatureListProps {
  features: string[]
}

export function FeatureList({ features }: FeatureListProps) {
  return (
    <ul className="flex flex-col gap-3 text-sm text-slate-600">
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-2">
          <RiCheckLine size={18} className="mt-0.5 shrink-0 text-accent-600" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  )
}
