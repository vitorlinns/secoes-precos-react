import { useBillingPeriod } from '../../hooks/useBillingPeriod'
import { BillingToggle } from './components/BillingToggle'
import { FeatureRow } from './components/FeatureRow'
import { PlanFooter } from './components/PlanFooter'
import { PlanHeader } from './components/PlanHeader'
import { features, plans } from './data'
import './theme.css'

export function StreamingSection() {
  const { period, toggle } = useBillingPeriod()

  return (
    <section className="streaming-theme flex min-h-[950px] flex-col justify-center border-b border-slate-200 bg-white px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Um plano pra cada tela da sua vida
          </h2>
          <p className="mt-4 max-w-xl text-slate-500">
            Compare os recursos e escolha o plano que acompanha do celular à sala de estar.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full table-fixed border-collapse">
            <colgroup>
              <col className="w-[28%]" />
              <col className="w-[24%]" />
              <col className="w-[24%]" />
              <col className="w-[24%]" />
            </colgroup>
            <thead>
              <tr>
                <th className="border-b border-slate-200 py-3 align-bottom sm:py-6">
                  <BillingToggle period={period} onToggle={toggle} />
                </th>
                {plans.map((plan) => (
                  <PlanHeader key={plan.id} plan={plan} period={period} />
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature) => (
                <FeatureRow key={feature.label} feature={feature} />
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="p-3 text-[10px] font-semibold tracking-wide text-slate-400 uppercase sm:p-6 sm:text-xs">
                  Escolher plano
                </td>
                {plans.map((plan) => (
                  <PlanFooter key={plan.id} plan={plan} />
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  )
}
