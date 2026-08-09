import type { RemixiconComponentType } from '@remixicon/react'
import {
  RiDeviceLine,
  RiDownload2Line,
  RiForbid2Line,
  RiGroup2Line,
  RiHdLine,
  RiSurroundSoundLine,
} from '@remixicon/react'

export interface StreamingPlan {
  id: string
  name: string
  price: {
    monthly: number
    yearly: number
  }
  badge?: string
  highlighted?: boolean
  ctaLabel: string
}

export interface ComparisonFeature {
  label: string
  icon: RemixiconComponentType
  values: (string | boolean)[]
}

export const plans: StreamingPlan[] = [
  {
    id: 'basico',
    name: 'Básico',
    price: { monthly: 22, yearly: 220 },
    ctaLabel: 'Assinar Básico',
  },
  {
    id: 'padrao',
    name: 'Padrão',
    price: { monthly: 35, yearly: 350 },
    badge: 'Mais assistido',
    highlighted: true,
    ctaLabel: 'Assinar Padrão',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: { monthly: 47, yearly: 470 },
    ctaLabel: 'Assinar Premium',
  },
]

export const features: ComparisonFeature[] = [
  { label: 'Resolução de vídeo', icon: RiHdLine, values: ['HD', 'Full HD', '4K + HDR'] },
  { label: 'Telas simultâneas', icon: RiDeviceLine, values: ['1 tela', '2 telas', '4 telas'] },
  { label: 'Perfis de usuário', icon: RiGroup2Line, values: ['1 perfil', '3 perfis', '6 perfis'] },
  { label: 'Download para offline', icon: RiDownload2Line, values: [false, true, true] },
  { label: 'Áudio espacial', icon: RiSurroundSoundLine, values: [false, false, true] },
  { label: 'Sem anúncios', icon: RiForbid2Line, values: [true, true, true] },
]
