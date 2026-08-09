import { useBillingPeriod } from '../../hooks/useBillingPeriod'
import { BillingToggle } from './BillingToggle'
import { PricingCard } from './PricingCard'
import { plans } from './data'

export function SaasStartupSection() {
  const { period, toggle } = useBillingPeriod()

  return (
    <section className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Planos para todo tamanho de time
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-500">
          Escolha o plano ideal para o seu momento. Cancele quando quiser, sem burocracia.
        </p>

        <div className="mt-10">
          <BillingToggle period={period} onToggle={toggle} />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} period={period} />
          ))}
        </div>
      </div>
    </section>
  )
}
