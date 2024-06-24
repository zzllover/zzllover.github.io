// eslint.config.js
import antfu from '@antfu/eslint-config';

export default antfu(
  { // Or customize the stylistic rules
    typescript: true,
    vue: true,
    stylistic: {
      indent: 2, // 4, or 'tab'
      quotes: 'single', // or 'double'
      semi: true,
    },
    formatters: {
      css: true,
      html: true,
      markdown: 'prettier',
    },
  },
  {
  // Remember to specify the file glob here, otherwise it might cause the vue plugin to handle non-vue files
    files: ['**/*.vue'],
    rules: {
      'vue/operator-linebreak': ['error', 'before'],
      'vue/multiline-html-element-content-newline': ['error', {
        ignoreWhenEmpty: true,
        allowEmptyLines: false,
      }],
    },
  },
);
