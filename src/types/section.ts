import type { ComponentType } from 'react'

export interface SectionMeta {
  id: string
  title: string
  description: string
  component: ComponentType
}
