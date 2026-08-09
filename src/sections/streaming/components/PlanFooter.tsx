import { RiArrowRightLine } from '@remixicon/react'
import type { StreamingPlan } from '../data'

interface PlanFooterProps {
  plan: StreamingPlan
}

export function PlanFooter({ plan }: PlanFooterProps) {
  return (
    <td
      className={`cursor-pointer border-l border-slate-200 p-3 text-center transition-colors sm:p-6 ${
        plan.highlighted ? 'bg-orange-600 hover:bg-orange-700' : 'hover:bg-slate-50'
      }`}
    >
      <span
        className={`inline-flex items-center gap-1 text-xs font-semibold sm:gap-1.5 sm:text-sm ${
          plan.highlighted ? 'text-white' : 'text-slate-900'
        }`}
      >
        {plan.ctaLabel}
        <RiArrowRightLine size={14} className="hidden sm:inline" />
      </span>
    </td>
  )
}
