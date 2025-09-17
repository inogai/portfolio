import { Link } from '@tanstack/react-router'

import { Logo } from '@/components/Logo'

function NavLink({ to, children }: { to: string, children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className={`
        text-muted-foreground
        hover:text-foreground
      `}
    >
      {children}
    </Link>
  )
}

export function Header() {
  return (
    <header className={`
      sticky top-0 flex h-(--header-height) items-center justify-between
      space-x-4 border-b bg-background p-4
    `}
    >
      <Logo />

      <NavLink to="/">Home</NavLink>
      <NavLink to="/timeline">Timeline</NavLink>

      <div className="grow" />

      <NavLink to="/credits">Credits</NavLink>
    </header>
  )
}
