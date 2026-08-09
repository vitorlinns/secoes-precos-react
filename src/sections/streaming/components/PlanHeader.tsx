import type { BillingPeriod } from '../../../types/pricing'
import { formatPrice } from '../../../utils/currency'
import type { StreamingPlan } from '../data'

interface PlanHeaderProps {
  plan: StreamingPlan
  period: BillingPeriod
}

export function PlanHeader({ plan, period }: PlanHeaderProps) {
  const price = plan.price[period]

  return (
    <th
      className={`border-b border-l border-slate-200 p-3 text-center align-bottom sm:p-6 ${
        plan.highlighted ? 'bg-orange-600' : ''
      }`}
    >
      <div className="flex flex-col items-center">
        {plan.badge ? (
          <span
            className={`rounded-full px-2 py-1 text-[10px] font-semibold tracking-wide uppercase sm:px-2.5 sm:text-[11px] ${
              plan.highlighted ? 'bg-white/15 text-white' : 'bg-orange-100 text-orange-700'
            }`}
          >
            {plan.badge}
          </span>
        ) : (
          <div className="h-[18px] sm:h-[22px]" />
        )}
        <h3
          className={`mt-2 text-sm font-semibold sm:mt-3 sm:text-lg ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}
        >
          {plan.name}
        </h3>
        <p className="mt-1 flex flex-col items-center sm:mt-2 sm:flex-row sm:items-baseline sm:gap-1">
          <span
            className={`text-lg font-bold tracking-tight sm:text-3xl ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}
          >
            {formatPrice(price)}
          </span>
          <span className={`text-xs sm:text-sm ${plan.highlighted ? 'text-white/70' : 'text-slate-500'}`}>
            /{period === 'monthly' ? 'mês' : 'ano'}
          </span>
        </p>
      </div>
    </th>
  )
}
