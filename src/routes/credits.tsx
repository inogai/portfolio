import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/credits')({
  component: Credits,
})

const categories = [
  {
    name: 'Core Stack',
    technologies: [
      {
        name: 'Vite',
        url: 'https://vitejs.dev/',
        description: 'Next Generation Frontend Tooling',
      },
      {
        name: 'React',
        url: 'https://react.dev/',
        description: 'The library for web and native user interfaces',
      },
      {
        name: 'TanStack Router',
        url: 'https://tanstack.com/router/',
        description: 'Modern and scalable routing for React applications',
      },
    ],
  },
  {
    name: 'UI & Design',
    technologies: [
      {
        name: 'shadcn/ui',
        url: 'https://ui.shadcn.com/',
        description:
          'Beautifully designed components that you can copy and paste into your apps.',
      },
      {
        name: 'tweak-cn',
        url: 'https://tweak-cn.vercel.app/',
        description: 'A shadcn/ui theme generator',
      },
    ],
  },
  {
    name: 'Tooling',
    technologies: [
      {
        name: 'ESLint',
        url: 'https://eslint.org/',
        description: 'Find and fix problems in your JavaScript code',
      },
      {
        name: '@antfu/eslint-config',
        url: 'https://github.com/antfu/eslint-config',
        description: 'Anthony Fu\'s ESLint config preset',
      },
    ],
  },
]

function Credits() {
  return (
    <main className="container bg-background mx-auto">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Credits</h1>
        <p className="text-lg text-muted-foreground mb-8">
          This website is built with some of the best open-source tools available.
          A huge thanks to the creators and maintainers of these projects.
        </p>
        <div className="space-y-8">
          {categories.map(category => (
            <div key={category.name}>
              <h2 className="text-3xl font-bold mb-4">{category.name}</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {category.technologies.map(tech => (
                  <a
                    key={tech.name}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 bg-card rounded-lg border hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-2xl font-bold mb-2">{tech.name}</h3>
                    <p className="text-muted-foreground">{tech.description}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
