module.exports = {
  extends: [
    'plugin:react/recommended',
    'prettier/react',
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    }
  },
  rules: {
    'max-len': ['error', { 'code': 140, 'ignoreUrls': true, 'ignoreStrings': true }],
    'import/prefer-default-export': 'off',
    'react/no-unescaped-entities': [
      'error',
      {
        forbid: [
          { char: '>', alternatives: ['&gt;'] },
          { char: '}', alternatives: ['&#125;'] },
        ],
      },
    ],
    quotes: ['error', 'single'],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:react/recommended',
        'prettier/react',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
      ],
      plugins: [
        '@typescript-eslint'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: 'module',
        project: './tsconfig.json',
      },
      rules: {
        'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
}
