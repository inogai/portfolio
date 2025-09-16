import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="flex grow flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
      <img
        src="https://avatars.githubusercontent.com/u/29174058?v=4"
        alt="icon"
        className="w-48 h-48 md:w-96 md:h-96 rounded-full object-cover"
      />
      <div className="text-center md:text-left">
        <h1 className="text-5xl md:text-8xl font-bold font-mono">inogai</h1>
        <h2 className="text-2xl font-bold mt-4">I am Alex Chen and I do code.</h2>
        <p className="mt-2 text-muted-foreground max-w-md">
          Computer Engineering Student at HKUST.
          Frontend, Scripting and AI Agents.
          Dotfiles ricing.
        </p>
      </div>
    </div>
  )
}
