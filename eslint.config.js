import antfu from '@antfu/eslint-config'
import betterTailwindcss from 'eslint-plugin-better-tailwindcss'

export default antfu(
  {
    react: true,
  },
  {
    plugins: {
      'better-tailwindcss': betterTailwindcss,
    },
    rules: {
      ...betterTailwindcss.configs.recommended.rules,
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: 'src/styles.css',
      },
    },
  },
  {
    ignores: [
      './src/routeTree.gen.ts',
      './src/components/ui/*.tsx',
    ],
  },
)
