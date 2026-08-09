import { Badge } from './components/Badge'
import { Button } from './components/Button'
import { FeatureList } from './components/FeatureList'
import { IconBadge } from './components/IconBadge'
import { PriceTag } from './components/PriceTag'
import type { BillingPeriod, PricingPlan } from '../../types/pricing'

interface PricingCardProps {
  plan: PricingPlan
  period: BillingPeriod
}

export function PricingCard({ plan, period }: PricingCardProps) {
  return (
    <div
      className={`flex flex-col rounded-2xl border p-8 text-left ${
        plan.highlighted
          ? 'border-green-500 bg-white shadow-xl shadow-green-500/10 ring-1 ring-green-500'
          : 'border-slate-200 bg-white shadow-sm'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <IconBadge icon={plan.icon} />
          <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
        </div>
        {plan.badge && <Badge>{plan.badge}</Badge>}
      </div>

      <p className="mt-3 text-sm text-slate-500">{plan.description}</p>

      <div className="mt-6">
        <PriceTag amount={plan.price[period]} period={period} />
      </div>

      <Button variant={plan.highlighted ? 'primary' : 'dark'} className="mt-8 w-full">
        {plan.ctaLabel}
      </Button>

      <div className="mt-8">
        <FeatureList features={plan.features} />
      </div>
    </div>
  )
}
