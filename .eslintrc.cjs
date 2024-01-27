module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:n/recommended',
    'plugin:perfectionist/recommended-natural'
  ],
  ignorePatterns: [
    '!.*',
    'coverage*',
    'lib',
    'node_modules',
    'pnpm-lock.yaml',
    'dist',
    '.eslintrc.cjs',
    'router.ts',
    'tailwind.config.js',
    'tailwind.color.js',
    'routeTree.gen.ts'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'perfectionist', 'n'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/no-explicit-any': 'warn',
    'perfectionist/sort-imports': 'off',
    'n/no-missing-import': 'off',
    'perfectionist/sort-named-imports': 'off'
  }
};
