import { RiCheckLine, RiSubtractLine } from '@remixicon/react'
import type { ComparisonFeature } from '../data'

interface FeatureRowProps {
  feature: ComparisonFeature
}

export function FeatureRow({ feature }: FeatureRowProps) {
  const Icon = feature.icon

  return (
    <tr>
      <td className="border-b border-slate-200 p-2 sm:p-4">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-700 sm:gap-3 sm:text-sm">
          <Icon size={18} className="hidden shrink-0 text-slate-600 sm:block" />
          {feature.label}
        </div>
      </td>

      {feature.values.map((value, index) => (
        <td key={index} className="border-b border-l border-slate-200 p-2 text-center sm:p-4">
          {typeof value === 'boolean' ? (
            value ? (
              <RiCheckLine size={18} className="mx-auto text-slate-900" />
            ) : (
              <RiSubtractLine size={18} className="mx-auto text-slate-400" />
            )
          ) : (
            <span className="text-xs font-medium text-slate-900 sm:text-sm">{value}</span>
          )}
        </td>
      ))}
    </tr>
  )
}
