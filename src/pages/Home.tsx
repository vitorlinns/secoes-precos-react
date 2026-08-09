import { sections } from '../sections/registry'

export function Home() {
  return (
    <main>
      {sections.map((section) => {
        const Section = section.component
        return <Section key={section.id} />
      })}
    </main>
  )
}
