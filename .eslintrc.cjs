// .eslintrc.cjs
module.exports = {
  root: true,
  env: { browser: true, es2022: true, node: true },
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:astro/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [
    // TypeScript Files
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: { project: false },
      plugins: ['@typescript-eslint']
    },
    // Astro Files
    {
      files: ['**/*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        // Usa o parser TS por baixo pros trechos de script
        parser: '@typescript-eslint/parser'
      }
    }
  ],
  rules: {
    // We can refine this over time; for now, soft defaults
  }
};
