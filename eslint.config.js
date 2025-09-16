import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
}, {
  ignores: [
    './src/routeTree.gen.ts',
    './src/components/ui/*.tsx',
  ],
})
