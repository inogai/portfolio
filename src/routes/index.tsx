import { createFileRoute } from '@tanstack/react-router'

import { GitHubIcon } from '@/components/GithubIcon'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div
      className={`
        flex w-full grow flex-col justify-stretch bg-cover bg-center
        md:flex-row md:bg-[url(@/scene.jpg)]
      `}
    >
      <div className={`
        flex grow flex-col items-center justify-end p-3
        md:flex-row md:p-12
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
      </div>
      <div className={`
        flex grow flex-col items-center p-3
        md:flex-row md:bg-black/50 md:p-12 md:text-background
        md:backdrop-blur-sm
      `}
      >
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
          <p className={`
            mt-2 max-w-md text-muted-foreground
            md:text-muted
          `}
          >
            Computer Engineering Student at HKUST.
            Frontend, Scripting and AI Agents.
            Dotfiles ricing.
          </p>

          <div className={`
            flex justify-center pt-4
            md:h-0 md:justify-start
          `}
          >
            <a
              className="hover:opacity-50"
              href="https://github.com/inogai"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="sr-only">View my GitHub profile</span>
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
