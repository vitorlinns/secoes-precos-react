import { formatPrice } from '../../../utils/currency'
import type { CompliancePlan } from '../data'

interface PlanRowProps {
  plan: CompliancePlan
  isSelected: boolean
  onSelect: () => void
}

export function PlanRow({ plan, isSelected, onSelect }: PlanRowProps) {
  const Icon = plan.icon

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`relative flex w-full cursor-pointer items-center justify-between gap-6 px-6 py-10 text-left transition-colors ${
        isSelected ? 'bg-slate-50' : 'hover:bg-slate-50'
      }`}
    >
      <span className="absolute top-0 left-0 h-0.5 w-full bg-slate-200" />
      {isSelected && (
        <span className="absolute top-0 left-0 h-0.5 animate-[fill-bar_3s_linear] bg-accent-600" />
      )}

      <div className="flex items-center gap-5">
        <Icon size={40} className="shrink-0 text-slate-900" />
        <div>
          <p className="text-lg font-semibold text-slate-900">{plan.name}</p>
          <p className="mt-1 text-base text-slate-500">{plan.description}</p>
        </div>
      </div>

      <p className="shrink-0 text-right">
        {plan.price === null ? (
          <span className="text-3xl font-bold text-slate-900">{plan.priceLabel ?? 'Grátis'}</span>
        ) : (
          <>
            <span className="text-3xl font-bold text-slate-900">{formatPrice(plan.price)}</span>
            <span className="text-base text-slate-500">/mês</span>
          </>
        )}
      </p>
    </button>
  )
}
