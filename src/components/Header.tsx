import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-center px-6 py-4">
        <Link to="/" className="inline-flex items-center">
          <img
            src="/brand/logo-react.png"
            alt="Seções em React"
            className="h-10 w-auto animate-spin [animation-duration:6s]"
          />
        </Link>
      </div>
    </header>
  )
}
