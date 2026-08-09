import type { BillingPeriod } from '../../../types/pricing'
import { Switch } from './Switch'

interface BillingToggleProps {
  period: BillingPeriod
  onToggle: () => void
}

export function BillingToggle({ period, onToggle }: BillingToggleProps) {
  const isYearly = period === 'yearly'

  return (
    <div className="flex flex-col items-start gap-2 px-3 sm:px-6">
      <span className="text-[10px] font-semibold tracking-wide text-slate-400 uppercase">
        Cobrança
      </span>
      <div className="flex items-center gap-2">
        <span className={`text-xs font-medium ${isYearly ? 'text-slate-400' : 'text-slate-900'}`}>
          Mensal
        </span>
        <Switch checked={isYearly} onChange={onToggle} label="Alternar cobrança mensal ou anual" />
        <span className={`text-xs font-medium ${isYearly ? 'text-slate-900' : 'text-slate-400'}`}>
          Anual
        </span>
      </div>
    </div>
  )
}
