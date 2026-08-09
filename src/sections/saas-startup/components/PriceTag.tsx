import type { BillingPeriod } from '../../../types/pricing'
import { formatPrice } from '../../../utils/currency'

interface PriceTagProps {
  amount: number
  period: BillingPeriod
}

export function PriceTag({ amount, period }: PriceTagProps) {
  return (
    <div className="flex items-baseline gap-1">
      <span className="text-4xl font-bold tracking-tight text-slate-900">
        {formatPrice(amount)}
      </span>
      <span className="text-sm text-slate-500">/{period === 'monthly' ? 'mês' : 'ano'}</span>
    </div>
  )
}
