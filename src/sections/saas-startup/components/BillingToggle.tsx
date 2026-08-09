import type { BillingPeriod } from '../../../types/pricing'
import { Badge } from './Badge'
import { Switch } from './Switch'

interface BillingToggleProps {
  period: BillingPeriod
  onToggle: () => void
}

export function BillingToggle({ period, onToggle }: BillingToggleProps) {
  const isYearly = period === 'yearly'

  return (
    <div className="flex items-center justify-center gap-3">
      <span className={`text-sm font-medium ${isYearly ? 'text-slate-400' : 'text-slate-900'}`}>
        Mensal
      </span>

      <Switch checked={isYearly} onChange={onToggle} label="Alternar cobrança mensal ou anual" />

      <span className={`text-sm font-medium ${isYearly ? 'text-slate-900' : 'text-slate-400'}`}>
        Anual
      </span>
      <Badge>2 meses grátis</Badge>
    </div>
  )
}
