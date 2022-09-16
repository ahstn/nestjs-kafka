module.exports = {
  env: {
      node: true,
      es2021: true
  },
  extends: [
      'standard',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
  },
  plugins: [
      '@typescript-eslint',
      'import'
  ],
  settings: {
    'import/internal-regex': '^@nestjs-kafka/',
    'import/core-modules': [ 
      '@nestjs-kafka/types' 
    ]
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-useless-constructor': 'off'
  }
}