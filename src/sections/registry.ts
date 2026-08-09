import type { SectionMeta } from '../types/section'
import { meta as saasStartup } from './saas-startup'

export const sections: SectionMeta[] = [saasStartup]

export function getSectionById(id: string): SectionMeta | undefined {
  return sections.find((section) => section.id === id)
}
