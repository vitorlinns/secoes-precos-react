import { RiBuilding4Line, RiRocketLine, RiVipCrownLine } from '@remixicon/react'
import type { PricingPlan } from '../../types/pricing'

export const plans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Para quem está começando e quer validar o produto.',
    icon: RiRocketLine,
    price: { monthly: 29, yearly: 290 },
    features: ['1 projeto', 'Até 3 usuários', 'Suporte por e-mail', '5GB de armazenamento'],
    ctaLabel: 'Começar agora',
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Para times em crescimento que precisam de mais poder.',
    icon: RiVipCrownLine,
    price: { monthly: 79, yearly: 790 },
    highlighted: true,
    badge: 'Mais popular',
    features: [
      'Projetos ilimitados',
      'Até 20 usuários',
      'Suporte prioritário',
      '50GB de armazenamento',
      'Integrações avançadas',
    ],
    ctaLabel: 'Assinar Pro',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Para empresas com necessidades de escala e segurança.',
    icon: RiBuilding4Line,
    price: { monthly: 199, yearly: 1990 },
    features: [
      'Tudo do Pro',
      'Usuários ilimitados',
      'Suporte dedicado 24/7',
      'Armazenamento ilimitado',
      'SSO e auditoria',
    ],
    ctaLabel: 'Falar com vendas',
  },
]
