import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="border-b border-slate-200">
      <div className="mx-auto flex max-w-5xl items-center justify-center px-6 py-4">
        <Link to="/">
          <img src="/brand/logo-react.png" alt="Seções em React" className="h-10 w-auto" />
        </Link>
      </div>
    </header>
  )
}
