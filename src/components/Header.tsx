import { Link } from '@tanstack/react-router'

import { Logo } from '@/components/Logo'

export function Header() {
  return (
    <header className="flex space-x-4 justify-between p-4 border-b">
      <Logo />
      <Link to="/" className="text-muted-foreground hover:text-foreground">
        Home
      </Link>

      <div className="grow" />

      <Link to="/credits" className="text-muted-foreground hover:text-foreground">
        Credits
      </Link>
    </header>
  )
}
