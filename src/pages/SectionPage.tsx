import { Link, Navigate, useParams } from 'react-router-dom'
import { getSectionById } from '../sections/registry'

export function SectionPage() {
  const { sectionId } = useParams<{ sectionId: string }>()
  const section = sectionId ? getSectionById(sectionId) : undefined

  if (!section) {
    return <Navigate to="/" replace />
  }

  const SectionComponent = section.component

  return (
    <main>
      <div className="mx-auto max-w-6xl px-6 pt-8">
        <Link to="/" className="text-sm font-medium text-green-600 hover:underline">
          ← Voltar para todas as seções
        </Link>
      </div>
      <SectionComponent />
    </main>
  )
}
