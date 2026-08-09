import type { SectionMeta } from '../types/section'
import { meta as compliance } from './compliance'
import { meta as saasStartup } from './saas-startup'
import { meta as streaming } from './streaming'

export const sections: SectionMeta[] = [saasStartup, streaming, compliance]

export function getSectionById(id: string): SectionMeta | undefined {
  return sections.find((section) => section.id === id)
}
