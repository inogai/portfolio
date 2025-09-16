import { Link } from '@tanstack/react-router'

export function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-primary"
      >
        <path d="M12 0L15.09 8.91L24 12L15.09 15.09L12 24L8.91 15.09L0 12L8.91 8.91L12 0Z" />
      </svg>
      <div>
        <span className="font-mono font-bold">inogai,</span>
        <span className="text-sm font-light text-muted-foreground"> an HKUST Student</span>
      </div>
    </Link>
  )
}
