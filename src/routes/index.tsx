import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className={`
      flex grow flex-col items-center justify-center gap-8
      md:flex-row md:gap-20
    `}
    >
      <img
        src="https://avatars.githubusercontent.com/u/29174058?v=4"
        alt="icon"
        className={`
          size-48 rounded-full object-cover
          md:size-96
        `}
      />
      <div className={`
        text-center
        md:text-left
      `}
      >
        <h1 className={`
          font-mono text-5xl font-bold
          md:text-8xl
        `}
        >
          inogai
        </h1>
        <h2 className="mt-4 text-2xl font-bold">I am Alex Chen and I do code.</h2>
        <p className="mt-2 max-w-md text-muted-foreground">
          Computer Engineering Student at HKUST.
          Frontend, Scripting and AI Agents.
          Dotfiles ricing.
        </p>
      </div>
    </div>
  )
}
