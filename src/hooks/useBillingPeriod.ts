import { useState } from 'react'
import type { BillingPeriod } from '../types/pricing'

export function useBillingPeriod(initial: BillingPeriod = 'monthly') {
  const [period, setPeriod] = useState<BillingPeriod>(initial)

  const toggle = () => setPeriod((p) => (p === 'monthly' ? 'yearly' : 'monthly'))

  return { period, setPeriod, toggle, isYearly: period === 'yearly' }
}
