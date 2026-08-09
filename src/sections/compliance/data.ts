import type { RemixiconComponentType } from '@remixicon/react'
import { RiContrast2Fill, RiHexagonFill, RiLayoutGrid2Fill, RiSparklingFill } from '@remixicon/react'

export interface CompliancePlan {
  id: string
  name: string
  description: string
  icon: RemixiconComponentType
  price: number | null
  priceLabel?: string
  features: string[]
  ctaLabel: string
}

export const plans: CompliancePlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Grátis para todos',
    icon: RiLayoutGrid2Fill,
    price: null,
    features: [
      'Emissão limitada de notas fiscais',
      'Calendário de obrigações',
      'Suporte por e-mail',
    ],
    ctaLabel: 'Começar grátis',
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Fundadores e primeiras contratações',
    icon: RiSparklingFill,
    price: 299,
    features: [
      'Emissão ilimitada de notas fiscais',
      'Calendário de compliance',
      'Orientação para notificações e ofícios',
      'Suporte prioritário',
    ],
    ctaLabel: 'Assinar Premium',
  },
  {
    id: 'pro-plus',
    name: 'Pro +',
    description: 'Multinacionais e times em crescimento',
    icon: RiContrast2Fill,
    price: 499,
    features: [
      'Tudo do Premium',
      'Múltiplas filiais e CNPJs',
      'Auditoria automatizada',
      'Gerente de conta dedicado',
    ],
    ctaLabel: 'Assinar Pro +',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Operações em larga escala',
    icon: RiHexagonFill,
    price: null,
    priceLabel: 'Sob consulta',
    features: [
      'Tudo do Pro +',
      'SLA e contrato dedicados',
      'Integrações personalizadas',
      'Onboarding assistido',
    ],
    ctaLabel: 'Falar com vendas',
  },
]
