
module.exports = {
  ignores: ['dist'],
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'eslint-plugin-react-refresh',
    'eslint-plugin-react-hooks'
  ],
  files: ['**/*.{ts,tsx}'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "indent": ["error", 2],
  },
};
