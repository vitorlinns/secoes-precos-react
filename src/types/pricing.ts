import type { RemixiconComponentType } from '@remixicon/react'

export type BillingPeriod = 'monthly' | 'yearly'

export interface PricingPlan {
  id: string
  name: string
  description: string
  icon: RemixiconComponentType
  price: {
    monthly: number
    yearly: number
  }
  highlighted?: boolean
  badge?: string
  features: string[]
  ctaLabel: string
}
