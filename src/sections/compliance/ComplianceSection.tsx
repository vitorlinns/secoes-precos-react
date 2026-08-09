import { useEffect, useState } from 'react'
import { FeaturesPanel } from './components/FeaturesPanel'
import { PlanRow } from './components/PlanRow'
import { plans } from './data'
import './theme.css'

export function ComplianceSection() {
  const [selectedId, setSelectedId] = useState(plans[0].id)
  const selectedPlan = plans.find((plan) => plan.id === selectedId) ?? plans[0]

  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedId((current) => {
        const currentIndex = plans.findIndex((plan) => plan.id === current)
        return plans[(currentIndex + 1) % plans.length].id
      })
    }, 3000)

    return () => clearInterval(timer)
  }, [selectedId])

  return (
    <section className="compliance-theme flex min-h-[950px] flex-col justify-center border-b border-slate-200 bg-white px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Preços flexíveis para{' '}
          <span className="bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">
            qualquer escala
          </span>
        </h2>
        <p className="mt-4 max-w-xl text-slate-500">
          Do primeiro CNPJ à operação multinacional: escolha o plano que acompanha o seu ritmo de
          crescimento e evolua quando precisar.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-[2fr_1fr] lg:gap-16">
          <div>
            {plans.map((plan) => (
              <PlanRow
                key={plan.id}
                plan={plan}
                isSelected={plan.id === selectedId}
                onSelect={() => setSelectedId(plan.id)}
              />
            ))}
          </div>

          <FeaturesPanel plan={selectedPlan} />
        </div>
      </div>
    </section>
  )
}
