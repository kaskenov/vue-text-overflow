import pluginjs from '@eslint/js';
import plugints from 'typescript-eslint';
import pluginvue from 'eslint-plugin-vue';
import pluginprettier from 'eslint-plugin-prettier/recommended';
import parservue from 'vue-eslint-parser';

export default [
  {
    ignores: ['dist/**/*.*', 'app/**/*.*', 'node_modules/**/*.*'],
  },
  pluginjs.configs.recommended,
  ...plugints.configs.recommended,
  ...pluginvue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: parservue,
      parserOptions: {
        parser: plugints.parser,
      },
    },
  },
  pluginprettier,
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          tabWidth: 2,
          semi: true,
          singleQuote: true,
          printWidth: 80,
          bracketSpacing: true,
        },
      ],
    },
  },
];
