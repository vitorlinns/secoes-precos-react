import { RiCheckLine } from '@remixicon/react'
import type { CompliancePlan } from '../data'

interface FeaturesPanelProps {
  plan: CompliancePlan
}

export function FeaturesPanel({ plan }: FeaturesPanelProps) {
  return (
    <div className="flex flex-col lg:pt-6">
      <span className="text-sm font-semibold tracking-wide text-slate-400 uppercase">Inclui</span>
      <ul className="mt-5 flex flex-col gap-4">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-base text-slate-700">
            <RiCheckLine size={22} className="mt-0.5 shrink-0 text-accent-600" />
            {feature}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="mt-10 w-fit cursor-pointer rounded-lg bg-slate-900 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-slate-700"
      >
        {plan.ctaLabel}
      </button>
    </div>
  )
}
